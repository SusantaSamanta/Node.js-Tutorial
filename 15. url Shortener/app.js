import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto'

const PORT = 3000;

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

const loadLink = async () => {
    try {
        const linkJson = await readFile(path.join('data', 'links.json'), 'utf-8');
        return JSON.parse(linkJson);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(path.join('data', 'links.json'), JSON.stringify({}));
            return {};
        }
        throw error;
    }
}
const saveLinks = async (link) => {
    await writeFile(path.join('data', 'links.json'), JSON.stringify(link));
}



const server = http.createServer(async (req, res) => {
    if (req.method == 'GET') {
        if (req.url == '/') {
            fileServe(res, path.join('public', 'index.html'), 'text/html');
        }
        else if (req.url == '/style.css') {
            fileServe(res, path.join('public', 'style.css'), 'text/css');
        }
    }

    if (req.method == 'POST') {
        if (req.url == '/shorten') {
            console.log(req.url);
            const link = await loadLink()  // load unique link from link.json file

            let body = '';
            req.on('data', (chunk) => {
                body = body + chunk;
            })
            req.on('end', async () => {
                let { url, shortCode } = JSON.parse(body); //using destructure we get url, shortSCode from body
                if (!url) {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('URL is require....');
                }
                let finalShortCode;
                if (!shortCode) // if short code not present then we code create an random code
                    finalShortCode = crypto.randomBytes(5).toString('hex');
                else
                    finalShortCode = shortCode;

                if (link[finalShortCode]) {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('Please give another short code.......');
                }

                link[finalShortCode] = url;
                await saveLinks(link);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
            })

        }
    }

});




server.listen(3000, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});


