const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} = require("firebase/storage");
const multer = require("multer");
const firebaseConfig = require("../db/connectFirebase");
const express = require("express");
const student = require("../model/student");
const uploadController = express.Router();

// Initialize Firebase
initializeApp(firebaseConfig);

//Intialize cloud storage and get a reference of the service
const storage = getStorage();

//setting up multer as a middle ware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });

uploadController.use("", upload.single("profileImage"), async (req, res) => {
  console.log(req.body);
  try {
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * +5.5);
    const ist = nd.toLocaleString("en-IN").split(",").join(" ");

    const storageRef = ref(storage, `files/${req.file.originalname}  ${ist}`);
    console.log(req.files);
    //create file metadata including the content type
    const metaData = {
      contentType: req.file.mimetype,
    };

    //upload the file in the bucket storage
    const snapShot = await uploadBytesResumable(
      storageRef,
      req.file.buffer,
      metaData
    );
    //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

    //grap public url
    const downloadURL = await getDownloadURL(snapShot.ref);

    if (downloadURL) {
      const studentData = req.body;
      const student = new student({
        first_name: studentData.first_name,
        last_name: studentData.last_name,
        email: studentData.email,
        phone: studentData.phone,
        primary_skills: studentData.primary_skills,
        secondary_skills: studentData.secondary_skills,
        education_list:  studentData.education_list.map((item) => {
            return {
                college_name: item.college_name,
            university_name: item.university_name,
            start_date: item.start_date,
            end_date: item.end_date,
            certificate: item.certificate,
            }
        }),
        work_experience: studentData.work_experience.map((item) => {
            return {
                company_name: item.company_name,
                start_date: item.start_date,
                end_date: item.end_date,
                currently_working: item.currently_working,
              }
        }),
        job_seeker: studentData.job_seeker,
        address: studentData.address,
        profile_pic: studentData.profile_pic,
        certificate: studentData.certificate,
      });
      const data = await studentData.save();
      if(data)  {
        return res.status(201).json({
            message: "Student details uploaded successfully"
        })
      }
      res.status(400).json({
        message: "Student details upload failed",
    });
    }

    
  } catch (err) {
    // console.log(err)
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
});

module.exports = uploadController;
