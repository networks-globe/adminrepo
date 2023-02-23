const mongoose = require("mongoose")

const PlacedStudentsSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    },
    course: {
        type: String,
        default: ""
    },
    center: {
        type: String,
        default: ""
    },
    ducatId: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    company: {
        type: String,
        default: ""
    },
    package: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        default: ""
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
const PlacedStudents = new mongoose.model("PlacedStudents", PlacedStudentsSchema)
module.exports = PlacedStudents