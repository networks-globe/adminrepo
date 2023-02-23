const mongoose = require("mongoose")

const OnlineRegistrationSchema = new mongoose.Schema({
    name:{
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
    city: {
        type: String
    },
    country: {
        type: String
    },
    zipcode: {
        type: String
    },
    amount: {
        type: String
    },
    status: {
        type: String
    },
    transactionid: {
        type: String
    },
    transactionstatus: {
        type: String,
        default:"Pending"
    },
    address: {
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
const OnlineRegistration = new mongoose.model("OnlineRegistration", OnlineRegistrationSchema)
module.exports = OnlineRegistration