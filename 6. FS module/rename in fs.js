const fs = require('fs');
const path = require('path');

let myPath = path.join(__dirname, 'temp.txt'); 
fs.writeFileSync(myPath, 'This file is made for delete', 'utf-8'); 

// to rename Temp.txt file we use fs.renameSync(old_path_including_file_name, new_p_inc_f_n)   were file name is require else error

let newPate = path.join(__dirname, 'updateTemp.pdf');
// fs.renameSync(myPath, newPate)