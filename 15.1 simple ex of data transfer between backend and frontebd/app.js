import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const PORT = 4000;


const fileServe = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath, 'utf-8');
        res.writeHead(200, { 'content-type': contentType });
        res.end(data);
        // console.log(data);
    } catch (error) {
        res.writeHead(404, { 'content-type': contentType });
        res.end("404 page not found");
    }
}

const server = http.createServer((req, res) => {
    if (req.method == 'GET') {
        if (req.url == '/') {
            fileServe(res, path.join('public', 'index.html'), 'text/html');
        }
        else if (req.url == '/style.css') {
            fileServe(res, path.join('public', 'style.css'), 'text/css');
        }
    }
    if (req.method == 'POST' || req.url == '/shorten') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            const { url, shortCode } = JSON.parse(body);

            console.log(url, shortCode)
            let finalCode = '';
            finalCode = (!shortCode) ? crypto.randomBytes(4).toString('hex') : shortCode;
            console.log(finalCode);

            

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ success: true, cause : 'finalRes', shortCode: finalCode, url: url }));
        })
        req.on('error', (err) => {
            console.log(err);
        })


    }

})




server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});