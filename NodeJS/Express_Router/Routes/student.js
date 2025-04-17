import express from "express";
import { Router } from "express";
const router = Router();

router.get("/",(req,res,next)=>{
    res.send('<h1>Student Page</h1>');
})
router.get("/studentDetails",(req,res,next)=>{
    res.send('<h1>Student Details Page</h1>');
})

export default router;