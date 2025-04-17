import express from "express";
import bodyParser from "body-parser";
// we need to import the external routes
import adminRoutes from "./Routes/admin.js"
import studentRoutes from "./Routes/student.js"

// start server
const app=express();
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}));
// use routes as a middleware
app.use( adminRoutes);     
// All student routes start with /student
app.use('/student', studentRoutes); 


app.get("/",(req,res)=>{
    res.send('<form action="/admin-panel" method="post"><h1>Go to Admin Panel from homepage</h1> <button type="submit">Submit</button></form>');
    console.log("go to admin panel from homepage");
    console.log(req.url)
})
// to send 404 response when url not found
// use this after all routes
app.use((req,res,next)=>{
    res.status(404).send('<h1>404 Page Not Found (custom page)</h1>');
    next();
})
app.listen(port,()=>{
    console.log("server started");
})