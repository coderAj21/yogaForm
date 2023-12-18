const express=require("express");
const router=express.Router();

const {login,signUp,getData}=require("../controllers/signUp");

router.get("/fetch",getData);
router.post("/login",login);
router.post("/signUp",signUp);


module.exports=router;