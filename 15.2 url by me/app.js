import http from 'http';
import { readFile, writeFile } from 'fs/promises';
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

const getLinkFromDB = async () => {
    try {
        let links = await readFile(path.join('dataBase', 'links.json'), 'utf-8')
        return JSON.parse(links);
    }
    catch (err) {
        console.log(err)
    }
}
const saveLinkInDB = async (links) => {
    let linksJson = JSON.stringify(links);
    await writeFile(path.join('dataBase', 'links.json'), linksJson);

}

const server = http.createServer(async (req, res) => {
    if (req.method == 'GET') {
        if (req.url == '/') {
            fileServe(res, path.join('public', 'index.html'), 'text/html');   // giv the html file to frontend 
        }
        else if (req.url == '/style.css') {
            fileServe(res, path.join('public', 'style.css'), 'text/css');   // giv the css file to frontend 
        }
    }
    if (req.method == 'POST' || req.url == '/shorten') {

        let links = await getLinkFromDB();  // receive all save code,url from DB folder as object form
        // console.log(links);

        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', async () => {
            const { url, shortCode } = JSON.parse(body);

            console.log(shortCode, url);

            if (!url) { // if user not give any url the url require response send
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, cause: 'urlRequire', }));
                return;
            }

            let finalCode = ''; // user not give code then create an random code
            finalCode = (!shortCode) ? crypto.randomBytes(4).toString('hex') : shortCode;


            // console.log(links[finalCode]);


            if (links[finalCode]) {  // if user or random code already present in DB folder then 'give another code require' response send
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, cause : 'uniqueCodeRequire', }));
                console.log('shortCode same......')
                return;
            }
            links[finalCode] = url;
            // after inserting new code and url links object save in DB folder
            await saveLinkInDB(links);

            
                // if all ok the send the final code and url 
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ success: true, cause: 'finalRes', shortCode: finalCode, url: url }));
        })
        req.on('error', (err) => {
            console.log(err);
        })


    }

})




server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});