const User=require("../models/User");
let response="";

exports.signUp=async(req,res)=>{
    try{
        const {name,age,email,contact,address,batch,password}=req.body;
        const query=await User.findOne({email:email});
        console.log(query);
        if (query){
            res.status(201).json({
                success:false,
                data:"User already registered...",
                messsage:"User already registered...",
            })
        }
        const newUser=new User({name,age,email,contact,address,batch,password});
        await newUser.save();
        res.status(200).json({
            success:true,
            data:newUser,
            messsage:"Entry Created Successfully..."
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            data:"Errro aa gya jiiii",
            messsage:error.messsage,
        })
    };
};

exports.login=async(req,res)=>{
    const {email,password}=req.body;
    console.log(email+" "+password);
    try{
        const query=await User.findOne({$and:[{email:{$eq:email}},{password:{$eq:password}}]});
        if (query){
            response=query;
            res.status(200).json({
                success:true,
                data:query,
                messsage:"Successfulll..."
    
            });
        }
        else{
            response="";
            res.status(201).json({
                success:false,
                data:query,
                messsage:"Unsuccessfulll..."
    
            })
        }

    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            data:"Errro aa gya jiiii",
            messsage:error.messsage,
        })
    };
};

exports.getData=(req,res)=>{
    console.log(response);
    res.send(response);
}

