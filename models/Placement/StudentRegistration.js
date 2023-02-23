const mongoose = require("mongoose")

const StudentRegistrationSchema = new mongoose.Schema({
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
    ducatId: {
        type: String,
        default:""
    },
    tenth: {
        type: String,
        default:""
    },
    twelvth: {
        type: String,
        default:""
    },
    graduation: {
        type: String,
        default:""
    },
    postgraduation: {
        type: String,
        default:""
    },
    qualification: {
        type: String,
        default:""
    },
    passoutYear: {
        type: String,
        default:""
    },
    
    trainer: {
        type: String,
        default:""
    },
    completeYear: {
        type: String,
        default:""
    },
    completeMonth: {
        type: String,
        default:""
    },
    college: {
        type: String,
        default:""
    },
    isAbove60: {
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
const StudentRegistration = new mongoose.model("StudentRegistration", StudentRegistrationSchema)
module.exports = StudentRegistration