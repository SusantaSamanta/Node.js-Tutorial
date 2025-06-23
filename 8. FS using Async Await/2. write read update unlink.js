// in async and await fs is same like readDir.

// we explain it the following example 

import { writeFile, readFile, appendFile, unlink } from 'fs/promises';

const fileHandling = async () => {
    let myDirectory = `C:\\Users\\HP\\Desktop\\Node js by thapa\\999999 file store\\fileHandling.txt`

    await writeFile(myDirectory,'First Write the file..', 'utf-8').then(() => {  
        console.log('Write successful...');
    }).catch((err) => {
        console.log(err);
    })

    await add();
    
    await readFile(myDirectory, 'utf-8').then((data) => {   
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })

    await add();
    
    await appendFile(myDirectory,'\n Update with data ', 'utf-8').then(() => {   
        console.log('File Update successful...');
    }).catch((err) => {
        console.log(err);
    })
    
    await add();


    await unlink(myDirectory).then(() => {   
        console.log('File deleted successful...');
    }).catch((err) => {
        console.log(err);
    })
    
}

fileHandling();

const add = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve();
        }, 5000);
    })
}

