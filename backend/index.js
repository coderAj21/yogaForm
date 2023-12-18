const express=require("express");
const db = require("./config/dbConnect");
const app=express();
const cors=require("cors");
const PORT=process.env.PORT || 4000;

// middlerware
app.use(express.json());
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 
    Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
app.use(cors(
    {
        origin:[""],
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
