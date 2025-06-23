let loginPage = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Login</title></head><body style="display:flex;justify-content:center;align-items:center;height:100vh;background:#f4f4f4;"><form style="background:#fff;padding:20px;box-shadow:0 0 10px rgba(0,0,0,0.1);border-radius:5px;"><h2 style="text-align:center;">Login</h2><label>Username:</label><input type="text" style="display:block;width:100%;margin:5px 0;padding:8px;border:1px solid #ccc;border-radius:4px;"><label>Password:</label><input type="password" style="display:block;width:100%;margin:5px 0;padding:8px;border:1px solid #ccc;border-radius:4px;"><button type="submit" style="width:100%;padding:10px;margin-top:10px;background:#28a745;color:white;border:none;border-radius:4px;cursor:pointer;">Login</button></form></body></html>'



const http = require('http');
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html')
    if (request.url == '/')
        response.write(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport"  content="width=device-width, initial-scale=1.0"><title>Home</title></head><body style="display:flex;justify-content:center;align-items:center;flex-direction: column; height:100vh;background:#f4f4f4;"><h1>Welcome to my Website</h1><a href="/login" style="text-decoration:none;"><button style="padding:10px 20px;font-size:16px;background:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer;">Go to Login</button></a></body></html>`);
    else if (request.url == '/login')
        response.write(loginPage);
    else
        response.write('<body height: 100%; style="color: blue; display: flex; justify-content:  center; align-items: center;"><h1>Error this page is not available...</h1></body>');
    response.end();
});




let PORT = 3000;
server.listen(PORT, () => {
    console.log('server id running on port 3000');
})

