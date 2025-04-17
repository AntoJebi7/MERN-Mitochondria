import express from "express";
const router = express.Router();  // router from express


// express server app is not here , so use router
// replace app by router
//use next because we are gonna use it in app.js with 
// app.use() as a middleware
router.post("/admin-panel",(req,res,next)=>{
    res.send('<form action="/admin" method="post"><h1>Go to Admin Page from admin panel</h1> <button type="submit">Submit</button></form>');
    console.log("In admin panel");
    console.log(req.url)
})
router.post("/admin",(req,res,use)=>{
    res.send('<h1>Admin Page </h1>');
    console.log(" in admin page");
    console.log(req.url);
})

// we need to export the routes to app.js
// to notify there is routes in this file to handle
// for ES Modules (ESM)  
export default router;

// for CommonJS (CJS) 
// module.exports = router;