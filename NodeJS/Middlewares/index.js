import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port=3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
app.post("/login",(req,res)=>{
    console.log(req.body);
    console.log("Username is "+req.body.username);
    console.log("Password is "+req.body.password);
    
});
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
    console.log(__dirname+"/public/index.html");
    // to get the whole path like this below,
    // C:\system\MERN-Mitochondria\NodeJS\Middlewares/public/index.html
})
app.listen(port,()=>{
    console.log("server running on port "+ port); 
})