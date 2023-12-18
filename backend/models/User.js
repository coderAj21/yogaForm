const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    batch:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    payementDate:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model("User",userSchema);