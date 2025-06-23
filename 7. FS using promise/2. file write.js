const fs = require('fs/promise');


////////////////                 writeFile(path, data, option).then().catch();

let myDirectory = `C:\\Users\\HP\\Desktop\\Node js by thapa\\999999 file store\\temp.txt`
//  👇 not use promise because (look require('fs/promise'))
fs.writeFile(myDirectory,'Hello world', 'utf-8').then(() => {   // it dive the filenames and folder names in an arr
    console.log('Write successful...');
}).catch((err) => {
    console.log(err);
})

