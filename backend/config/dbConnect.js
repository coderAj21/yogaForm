const mongoose=require("mongoose");
require("dotenv").config();
const MONGODB_URL="mongodb+srv://akartik689:EidjxAkYsnhule6d@cluster1.huwb3qe.mongodb.net/yogaDatabase?retryWrites=true&w=majority"


const db=()=>{
    mongoose.connect(MONGODB_URL)
    .then(()=>(console.log("DB is Connected...")))
    .catch((error)=>(console.log(error)));
}

module.exports=db;
