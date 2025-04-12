import HTTP from 'http';
import fs from 'fs';
function serverFunction(req, res) {
    const url = req.url;
    const req_method = req.method;

    if (url === "/") {
        console.log(`Request: ${req_method} ${url}`);
        console.log('Headers:', req.headers);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("home page");
        res.write(`
            <form method='post' action='/getSecret'>
                <input type='text' name='secret' placeholder='Enter something'/>
                <input type='submit' value='go to secrets page'/>
            </form>
        `);
        res.end();

    } else if (url === "/getSecret" && req_method === "POST") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("secret page ");
        res.write(`
            <form method='post' action='/secret-posted'>
                <input type='text' name='secret' placeholder='Enter your secret'/>
                <input type='submit' value='send'/>
            </form>
        `);
        res.end();

    } else if (url === "/secret-posted" && req_method === "POST") {
        var data_storage = '';
        req.on('data',(a)=>{
            data_storage += a.toString()
            console.log(a + "buffer chunks");        
            console.log(data_storage); 
        })
        
        req.on('end', () => {
            console.log("Received form data:", data_storage); // Ex: secret=hello123
    
            // Save to file
            // fs.writeFileSync() expects a 
            // string or a buffer, not an array.
            // so data_storage.split("=") is wrong

            // instead 
            // let parts = data_storage.split("=");
            // fs.writeFileSync("storage.txt", parts[1]);
            
            // or convert it to object and get by name
            let parsed = new URLSearchParams(data_storage);
            let secret = parsed.get("secret");
            fs.writeFileSync("storage.txt", secret);

            // Redirect after saving
            res.statusCode = 302;
            res.setHeader('Location', '/redirect-page');
            res.end();
        });

    } else if (url === "/redirect-page") {
        // res.writeHead(302, { "Content-Type": "text/html" });
        // res.setHeader('Location', '/');

        //Always set headers first, before
        // you call write() or end(). 
        // Once headers are sent, they can’t be changed.

        res.statusCode = 302;
        res.setHeader('Location', '/');
        // "You have been redirected! Secret was stored."
        res.end();

    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
}

const server = HTTP.createServer(serverFunction);
server.listen(3000, () => {
    console.log("Server running on port 3000");
});
