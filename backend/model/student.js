const { Schema, model} = require('mongoose');

const student = new Schema ({
    first_name: {type : String, required : true},
    last_name: {type : String, required : true},
    email: {type : String, required : true},
    phone: {type: Number, required: true},
    primary_skills : {type : String, required : true},
    secondary_skills : {type : String, required : true},
    education_list : [
        {
            college_name : {type : String, required : true},
            university_name : {type : String, required : true},
            start_date : {type : String, required : true},
            end_date : {type : String, required : true},
            certificate : {type : String, required : true},
        }
    ],
    work_experience : [
        {
            company_name : {type : String, required : true},
            start_date : {type : String, required : true},
            end_date : {type : String, required : true},
            currently_working : {type : Boolean, required : true},
        }
    ],
    job_seeker : {type : Boolean, required : true},
    address : {type : String, required : true},
    profile_pic : {type : String, required : true},
    certificate : {type : String, required : true}
});

module.exports = model("student", student)