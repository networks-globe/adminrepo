const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    sortOrder:{
        type:Number
    },
    shortdescription: {
        type: String,
        default: ""
    },
    longdescription: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default:""
    },
    featureimage: {
        type: String,
        default:""
    },
    blogcategory: {
        type: String,
        default:""
    },
    seourl: {
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
    headcss: {
        type: String,
        default:""
    },
    footercss: {
        type: String,
        default:""
    },
    headjs: {
        type: String,
        default:""
    },
    footerjs: {
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
const Blog = new mongoose.model("Blog", BlogSchema)
module.exports = Blog