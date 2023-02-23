const mongoose = require("mongoose")

const ApplyForJobSchema = new mongoose.Schema({
    name: {
        type: String,
        default:""
    },
    email: {
        type: String,
        default:""
    },
    phone: {
        type: String,
        default:""
    },
    course: {
        type: String,
        default:""
    },
    center: {
        type: String,
        default:""
    },
    jobType: {
        type: String,
        default:""
    },
    linkedinProfile: {
        type: String,
        default:""
    },
    aboutYourself: {
        type: String,
        default:""
    },
    aboutCourse:{
        type:String,
        default:""
    },
    resume:{
        type:String,
        default:""
    },
    createDate:{
        type:String,
        default:""
    },
    updateByName: {
        type: String,
        default:""
    },
    updateByRole: {
        type: String,
        default:""
    },
    updateById: {
        type: String,
        default:""
    },
    updateDate: {
        type: String,
        default:""
    },
    status: {
        type: String,
        default: "Active"
    },
    remark: {
        type: String,
        default: ""
    }
})
const ApplyForJob = new mongoose.model("ApplyForJob", ApplyForJobSchema)
module.exports = ApplyForJob