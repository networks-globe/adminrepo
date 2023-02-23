const mongoose = require("mongoose")
async function getConnect(){
    try{ 
        // await mongoose.connect("mongodb://127.0.0.1:27017/ducatindia")
        await mongoose.connect(process.env.DBKEY)
        console.log("Database is Connected!!!!!!")
    }
    catch(error){
        console.log(error);
    }
}
mongoose.set("strictQuery",false)
getConnect()
