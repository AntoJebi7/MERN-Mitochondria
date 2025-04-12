import express from "express";

const app = express();
const port= 3000;


// own middleware function 
function own_middileware(req,res,next){
    console.log("request method "  + req.method);
    next(); // handler to next function or method
}
// own middleware , that logs similar to morgan but its own
app.use(own_middileware)


function getName(req,res){
    console.log("function call");
    res.send("Hello");
}

app.get("/",getName)

app.listen(port,()=>{
    console.log("server is running");
});