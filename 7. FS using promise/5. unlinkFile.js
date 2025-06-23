const fs = require('fs/promises');


////////////////                 unlink(path).then().catch();

let myDirectory = `C:\\Users\\HP\\Desktop\\Node js by thapa\\999999 file store\\temp.txt`

fs.unlink(myDirectory).then(() => {   
    console.log('File deleted successful...');
}).catch((err) => {
    console.log(err);
})

