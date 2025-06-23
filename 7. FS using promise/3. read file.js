const fs = require('fs');


let myDirectory = `C:\\Users\\HP\\Desktop\\Node js by thapa\\999999 file store\\temp.txt`
fs.promises.writeFile(myDirectory,'Hello world this is for write', 'utf-8').then(() => {  
    console.log('Write successful...');
}).catch((err) => {
    console.log(err);
})


////////////////                 readFie(path, option).then(data).catch();

fs.promises.readFile(myDirectory, 'utf-8').then((data) => {   
    console.log(data);
}).catch((err) => {
    console.log(err);
})
