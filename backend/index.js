const express=require("express");
const db = require("./config/dbConnect");
const app=express();
const cors=require("cors");
const PORT=process.env.PORT || 4000;

// middlerware
app.use(express.json());
app.use(cors(
    {
        Origin:["https://yoga-form-frontend.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));



// routes
const routes=require("./routes/routes");
app.use("/api",routes);


app.get("/",(req,res)=>{
    res.send("Server is Working....");
})

db();
app.listen(PORT,()=>{
    console.log("Server is running at Port : "+PORT);
});
