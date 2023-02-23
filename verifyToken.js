const jwt = require("jsonwebtoken")
function verifyToken(req, res, next) {
    try{
        const token = JSON.parse(req.headers.authorization)
        jwt.verify(token, process.env.JSONTOKENKEY, async (error) => {
            if (error) {
                res.send({ result: "Fail", message: "Authentication Fail!!! please Login Again To Verify Your Authentication!!!" })
            }
            else {
                next()
            }
        })
    }
    catch(error){
        res.send({ result: "Fail", message: "Authentication Fail!!! Your Are Not a Verified User!!!" })
    }
}
module.exports = verifyToken