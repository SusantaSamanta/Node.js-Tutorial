
//  the working process of sync and Async is same only difference is in syntax 

const fs = require('fs');


///////////// fs.writeFile(filePath, DataInString, options, callBack);
const myFile = 'myFile.txt';
fs.writeFile(myFile, 'Hello my name is Susanta Samanta', 'utf-8', (err) => {
    if (err)
        console.log('error');
    else
        console.log('File write successful..');
});

///// for read file
///////////// fs.readFile(filePath, options, callBack);
//////                                        in callBack we receive data and err.

fs.readFile('myFile.txt', 'utf-8', (err, data) => {
    if (err)
        console.log(err);
    else
        console.log(data);
});



/////                 for append data in file
/////////    fs.appendFile(filePath, DataInStringForUpdate, options, callBack);

fs.appendFile('myFile.txt', '\nHello my name is Susanta Samanta', 'utf-8', (err) => {
    if (err)
        console.log(err);
    else
        console.log('data updated successful... ');
});


//                   for delete file
////////    fs.unlink(filePath, callBack);  

// fs.unlink('myFile.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('file deleted successful... ');
// });













