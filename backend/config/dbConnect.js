const mongoose=require("mongoose");
require("dotenv").config();
const MONGODB_URL=process.env.MONGODB_URL;


const db=()=>{
    mongoose.connect(MONGODB_URL)
    .then(()=>(console.log("DB is Connected...")))
    .catch((error)=>(console.log(error)));
}

module.exports=db;