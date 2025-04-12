import http from "http";
import fs from "fs";
function func(req, res) {
    const url = req.url;
    const met = req.method;
    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" }); 
        res.write("home page");
        res.write(`
            <form method='post' action='/form-posted'>
            <input type='text' value='message'/>
                <input type='submit' value='send'/>
            </form>
        `);
        
        res.end();
    } else if (url === "/form-posted" && met === "POST") {
        req.on('data',(a)=>{
            console.log(a)
            // fs.writeFileSync('hello.txt',a.toString())
        })
        fs.writeFileSync('hello.txt',"DUMMY")
        //res.writeHead(302, { "Location": "/form-done" }); // Sets both headers & status in one step
        res.setHeader('Location', '/form-done');
        res.statusCode = 302;
        res.end();
    } else if (url === "/form-done") {
        
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Form submission successful!</h1>");
        res.end();
    }
}

const server1 = http.createServer(func);

console.log("hello node");

server1.listen(3300, () => {
    console.log("Server is running on port 3300");
});
