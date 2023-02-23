const express = require("express")
const Configration = require("../../models/Main/Configration")
const verifyToken = require("../../verifyToken")

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await Configration.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, async (req, res) => {
        try {
            var data = await Configration.findOne({ _id: req.params._id })
            if (data) {
                data.mailHr = req.body.mailHr ?? data.mailHr
                data.mailMain = req.body.mailMain ?? data.mailMain
                data.mailCertificate = req.body.mailCertificate ?? data.mailCertificate
                data.mailEnquiry = req.body.mailEnquiry ?? data.mailEnquiry
                data.mailPlacement = req.body.mailPlacement ?? data.mailPlacement
                data.mailSchedule = req.body.mailSchedule ?? data.mailSchedule
                data.updateDate = new Date()
                data.updateById = req.body.updateById ?? data.updateById
                data.updateByName = req.body.updateByName ?? data.updateByName
                data.updateByRole = req.body.updateByRole ?? data.updateByRole
                await data.save()
                res.send({ result: "Done", message: "Record is Updated!!!", data: data })
            }
            else {
                if (error.keyValue)
                    res.status(400).send({ result: "Fail", message: "Configration  Name Must Be Unique!!!" })
                else
                    res.status(404).send({ result: "Fail", message: "Configration  not Found!!!" })
            }
        }
        catch (error) {
            res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
        }
    })
module.exports = router