const fs = require('fs');

////////////////          readdir(path)
fs.promises.readdir(__dirname).then((data) => {   // it dive the filenames and folder names in an arr
    console.log(data);
}).catch((err) => {
    console.log(err);
})

/// now check it another way

let myDirectory = `C:\\Users\\HP\\Desktop\\Node js by thapa`
fs.promises.readdir(myDirectory).then((data) => {   // it dive the filenames and folder names in an arr
    console.log(data);
}).catch((err) => {
    console.log(err);
})





