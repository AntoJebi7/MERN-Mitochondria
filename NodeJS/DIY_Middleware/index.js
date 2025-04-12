import express from "express";
import bodyParser from "body-parser";
const app = express();
const port= 3000;


// own middleware function 
function own_middileware(req,res,next){
    console.log("request method "  + req.method);
    next(); // handler to next function or method
}
// own middleware , that logs similar to morgan but its own
app.use(own_middileware);
app.use(bodyParser.urlencoded({extended:true}));
app.use("/storeit",(req,res,next)=>{
    console.log("store it to vault");
    res.send(`
        <form action="/onlypost" method="post">
    <input type="password" id="password" name="password" required><br><br>
    <input type="submit" value="Login">
  </form>
        `)
})
app.post("/onlypost",(req,res)=>{
    console.log("only accessible thorugh post method ");
    console.log("your password is  " + req.body.password);
    res.send("only post access for the password  " + req.body.password);
});

function getName(req,res){
    console.log("function call");
    res.send("Hello");
}

app.get("/",getName)

app.listen(port,()=>{
    console.log("server is running");
});