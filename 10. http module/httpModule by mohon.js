const http = require('http');
let server = http.createServer((req, res) => {
    if (req.url == "/") {
        res. end('Hello World This is HOME Page');
    }
    if (req.url == "/about") {
        res.end('Hello World This is About Page');
    }

});

server.listen("5001","127.0.0.1",()=>{
    console.log("Server is listening on port :5001");
})
