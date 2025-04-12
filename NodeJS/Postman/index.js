import express from "express";

const app = express();
const port=3000;

function getHome(req,res){
    res.send("hello home page")
}
function registerPage(req,res){
    res.sendStatus(201);
}
app.get("/",getHome)  // view in postman body section
app.post("/register",registerPage)
app.put("/users/anto",(req,res)=>{
    res.sendStatus(200);
})
app.patch("/users/anto",(req,res)=>{
    res.sendStatus(200);
})
app.delete("/users/anto",(req,res)=>{
    res.sendStatus(200);
})
app.listen(port,()=>{
    console.log("server running on port "+ port); 
})