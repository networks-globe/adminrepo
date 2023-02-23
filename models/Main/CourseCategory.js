const mongoose = require("mongoose")

const CourseCategorySchema = new mongoose.Schema({
    name:{
        type:String
    },
    logo:{
        type:String
    },
    status:{
        type:String,
        default:"Active"
    },
    remark:{
        type:String,
        default:""
    },
    sortOrder: {
        type: Number
    },
    addByName: {
        type: String,
        default:""
    },
    addByRole: {
        type: String,
        default:""
    },
    addById: {
        type: String,
        default:""
    },
    createDate: {
        type: String,
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
const CourseCategory = new mongoose.model("CourseCategory",CourseCategorySchema)
module.exports = CourseCategory