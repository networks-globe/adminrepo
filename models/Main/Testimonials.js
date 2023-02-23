const mongoose = require("mongoose")

const TestimonialSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    profile: {
        type: String
    },
    course: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    message: {
        type: String
    },
    type: {
        type: String
    },
    image: {
        type: String
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
const Testimonial = new mongoose.model("Testimonial", TestimonialSchema)
module.exports = Testimonial