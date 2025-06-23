// const fs = require ('fs/promises');
import { readdir } from 'fs';


let myDirectory = `C:\\Users\\HP\\Desktop\\Node js by thapa`
// const readDir = async () => {
//     await readdir(myDirectory).then((data) => {  
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })
// }
// readDir();

/* simple syntax of async readdir : */
readdir(myDirectory, (err, files) => {
    if (err) {
        console.log("Error reading directory:", err);
    } else {
        console.log("Directory Contents:", files);
    }
});

console.log('this is execute first');  // because of the asynchronous readDir wait for 
                                        // read the dir and other code will execute






