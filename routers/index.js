const express=require("express")
const router=express.Router();

router.get("/",(req,res)=>{
    res.render("index",{title:"Express"})
})

router.get("/document",(req,res)=>{
  let userJson=require("../config/userSwagger.json")
  return res.status(200).send(userJson)
})
