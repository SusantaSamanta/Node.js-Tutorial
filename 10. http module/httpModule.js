const http = require('http');
http.createServer((req, res) => {
    res.write('Hello World This http server');   // res.write sed the massage as response from server
    res.end();  // end the response 
    // res.write('ok ebd')    //Error [ERR_STREAM_WRITE_AFTER_END]: write after end
}).listen(5000);


// status code and response header 

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});  // {here the response header is an object}
    res.write('Hello World This http server. With response header');  
    console.log('request url is', req.url)  // req.url is the request url. from  the clintWeb to the server
    res.write(`<p style="margin: 30px; font-size: 30px;">Request URL: ${req.url}</p>`); // this request is show by res.write  by the server.
    res.end();
}).listen(5001, () => {
    console.log('server is running on the port 5001  ......')
});


/* console output : 
request url is /susanta           this request by user       (also show in clintWB)
request url is /favicon.ico        ,,    ,,    ,,  browser     not  ,,   ,    ,,
request url is /ABCD              this request by user       (also show in clintWB)
request url is /favicon.ico        ,,    ,,    ,,  browser    not   ,,   ,,  ,,      A favicon is the small icon that appears in the browser tab when you visit a website.  
                                                                                        The browser automatically sends a request for /favicon.ico when you visit any webpage.
                                                                                        Your server logs the request using console.log('request url is', req.url), which prints /favicon.ico in the terminal.

*/
