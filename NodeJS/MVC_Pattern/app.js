import express from "express";
import bodyParser from "body-parser";


// to set correct path for various os to find files correctly,
//  import this core module - mpath
import path from "path";
//In ES Modules, __dirname is not available by default 
// like it is in CommonJS. so,
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



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
app.use(express.static(path.join(__dirname , 'public')))

app.get("/",(req,res)=>{
    res.send('<form action="/admin-panel" method="post"><h1>Go to Admin Panel from homepage</h1> <button type="submit">Submit</button></form>');
    console.log("go to admin panel from homepage");
    console.log(req.url)
})
// to send 404 response when url not found
// use this after all routes
app.use((req,res,next)=>{
    //res.status(404).send('<h1>404 Page Not Found (custom page)</h1>');
    res.status(404).sendFile(path.join(__dirname , 'views', '404.html'));
})
app.listen(port,()=>{
    console.log("server started");
})