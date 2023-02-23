const mongoose = require("mongoose")

const CertificationRequestSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    course: {
        type: String
    },
    center: {
        type: String
    },
    faculty: {
        type: String
    },
    ducatId: {
        type: String
    },
    from: {
        type: String
    },
    toDate: {
        type: String
    },
    certificateNo: {
        type: String
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
const CertificationRequest = new mongoose.model("CertificationRequest", CertificationRequestSchema)
module.exports = CertificationRequest