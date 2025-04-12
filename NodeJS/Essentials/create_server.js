import http from 'http';

// http create server
function createServer(req,res) {
    console.log('Server is running on port 3000' + req);
}

const server = http.createServer((req,res)=>{
    console.log('Server is running on port 3000' + req.url);
    console.log('Server is running on port 3000' + req.method);
    console.log('Server is running on port 3000' + req.headers);

    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello from Nodejs server</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
    
});

server.listen(3000)