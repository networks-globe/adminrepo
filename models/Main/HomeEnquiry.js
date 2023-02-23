const mongoose = require("mongoose")

const HomeEnquirySchema = new mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    course: {
        type: String
    },
    center: {
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
const HomeEnquiry = new mongoose.model("HomeEnquiry", HomeEnquirySchema)
module.exports = HomeEnquiry