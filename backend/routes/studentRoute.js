const express = require("express");
const uploadController = require("../controller/addStudentController");
const student = require("../model/student");
const studentRoute = express.Router();

studentRoute.get('', async(req, res) => {
    try{
        const studentData = await student.find({});
        res.status(200).json({
            message : "Students data fetched successfully",
            data : studentData
        })
    }
    catch(err){
        res.status(500).json({
            massage: err.message,
          });
    }
})

studentRoute.get("/:id",async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      const studentData = await student.findOne({
        $or: [{ email: id }, { phone: Number(id) }],
      });
      if (studentData) {
        return res.status(200).json({
          message: "Student data feteched successfully",
          data: studentData,
        });
      }
      res.status(404).json({
        message: "No such student exists",
        data : []
      })
    } catch (err) {
      res.status(500).json({
        massage: err.message,
      });
    }
  } else {
    res.status(400).json({ message: "invalid identifier" });
  }
});

studentRoute.post("", uploadController);

module.exports = studentRoute;
