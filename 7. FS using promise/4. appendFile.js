const fs = require('fs');


////////////////                 appendFile(path, data, option).then().catch();

let myDirectory = `C:\\Users\\HP\\Desktop\\Node js by thapa\\999999 file store\\temp.txt`

fs.promises.appendFile(myDirectory,'\nFile Update with data ', 'utf-8').then(() => {   
    console.log('File Update successful...');
}).catch((err) => {
    console.log(err);
})

