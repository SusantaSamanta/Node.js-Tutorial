const fs = require('fs');
const path = require('path');

let myPath = path.join(__dirname, 'temp.txt'); 
fs.writeFileSync(myPath, 'This file is made for delete', 'utf-8'); 


// to delete Temp.txt file we use fs.unlinkSync(path_including_file_name)   were file name is require else error

// fs.unlinkSync(myPath);
