const mongoose = require("mongoose")

const DriveSchema = new mongoose.Schema({
    name: {
        type: String,
        default:""
    },
    startDate: {
        type: String,
        default:""
    },
    startTime: {
        type: String,
        default:""
    },
    technology: {
        type: String,
        default:""
    },
    company: {
        type: String,
        default:""
    },
    profile: {
        type: String,
        default:""
    },
    experience: {
        type: String,
        default:""
    },
    qualification: {
        type: String,
        default:""
    },
    contactPerson: {
        type: String,
        default:""
    },
    contactNumber: {
        type: String,
        default:""
    },
    location: {
        type: String,
        default:""
    },
    skills: {
        type: String,
        default:""
    },
    venu: {
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
    remark: {
        type: String,
        default: ""
    }
})
const Drive = new mongoose.model("Drive", DriveSchema)
module.exports = Drive