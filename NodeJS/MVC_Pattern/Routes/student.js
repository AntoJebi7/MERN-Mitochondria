import express from "express";
import { Router } from "express";
const router = Router();
import path from "path";

// import dirname from path.js
import __dirname from "../utils/path.js";


router.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../' , 'views', 'students.html')); // res.send('<h1>Student Page</h1>');
})
router.get("/studentDetails",(req,res,next)=>{
    res.send('<h1>Student Details Page by get</h1>');
})
router.post("/studentDetails",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..' , 'views', 'students.html'));
    console.log(req.body["studentName"]);
})

export default router;