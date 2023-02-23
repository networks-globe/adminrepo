const express = require("express")
const CMS = require("../../models/Main/CMS")
const verifyToken = require("../../verifyToken")


const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/logo')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await CMS.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await CMS.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "Record  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken,upload.single('logo'), async (req, res) => {
    try {
        var data = await CMS.findOne({ _id: req.params._id })
        if (data) {
            data.seourl = req.body.seourl ?? data.seourl
            data.content = req.body.content ?? data.content
            data.seotitle = req.body.seotitle ?? data.seotitle
            data.metakeywords = req.body.metakeywords ?? data.metakeywords
            data.metadescrption = req.body.metadescrption ?? data.metadescrption
            data.metasection = req.body.metasection ?? data.metasection
            data.headcss = req.body.headcss ?? data.headcss
            data.headjs = req.body.headjs ?? data.headjs
            data.footercss = req.body.footercss ?? data.footercss
            data.footerjs = req.body.footerjs ?? data.footerjs
            data.fromemail = req.body.fromemail ?? data.fromemail
            data.updateDate = new Date()
            data.updateById = req.body.updateById ?? data.updateById
            data.updateByName = req.body.updateByName ?? data.updateByName
            data.updateByRole = req.body.updateByRole ?? data.updateByRole
            try {
                if (req.file && data.logo)
                    fs.unlinkSync("public/logo/" + data.logo)
                data.logo = req.file.filename ?? data.logo
            }
            catch (error) { }
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else {
            res.status(404).send({ result: "Fail", message: "Record not Found!!!" })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})

module.exports = router