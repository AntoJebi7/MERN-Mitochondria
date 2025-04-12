
import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello App");
});
app.get("/about",(req,res)=>{
    console.log("about page");
    res.send("hello about page")
})
app.listen(port,()=>{
    console.log("server running on port "+ port);
})
// windows command to see listening ports from outside
// netstat -ano | findstr "LISTENING"   