const mongoose = require("mongoose")

const FaqCategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    sortOrder:{
        type:Number
    },
    addbyName: {
        type: String,
        default:""
    },
    addbyRole: {
        type: String,
        default:""
    },
    addbyId: {
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
const FaqCategory = new mongoose.model("FaqCategory", FaqCategorySchema)
module.exports = FaqCategory