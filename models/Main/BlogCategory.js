const mongoose = require("mongoose")

const BlogCategorySchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String,
        default: ""
    },
    seourl: {
        type: String,
        default:""
    },
    image: {
        type: String,
        default:""
    },
    metatitle: {
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
    headcss:{
        type:String
    },
    headjs:{
        type:String
    },
    footercss:{
        type:String
    },
    footerjs:{
        type:String
    },
    sortOrder:{
        type:Number
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
const BlogCategory = new mongoose.model("BlogCategory", BlogCategorySchema)
module.exports = BlogCategory