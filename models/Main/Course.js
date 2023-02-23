const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        default:""
    },
    redirectUrl: {
        type: String,
        default:""
    },
    subtitle: {
        type: String,
        default:""
    },
    courseCategory: {
        type: String,
        default:""
    },
    description: {
        type: String,
        default: ""
    },
    content:[],
    pdf: {
        type: String,
        default:""
    },
    topics:[],
    center: {
        type: String,
        default: "All"
    },
    seourl: {
        type: String,
        default:""
    },
    image: {
        type: String,
        default:""
    },
    cover: {
        type: String,
        default:""
    },
    seotitle: {
        type: String,
        default:""
    },
    metakeywords: {
        type: String,
        default:""
    },
    metadescription: {
        type: String,
        default:""
    },
    metasection: {
        type: String,
        default:""
    },
    headcss: {
        type: String,
        default:""
    },
    headjs: {
        type: String,
        default:""
    },
    footercss: {
        type: String,
        default:""
    },
    footerjs: {
        type: String,
        default:""
    },
    fromemail: {
        type: String,
        default:""
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
    popular: {
        type: String,
        default: "No"
    },
    sortOrder: {
        type: Number,
        default:0
    },
    remark: {
        type: String,
        default: ""
    }
})
const Course = new mongoose.model("Course", CourseSchema)
module.exports = Course