const fs = require('fs')
////////////////    fs.appendFileSync(filePath, data_which_will_append, option)    //////////////////
///   *note : hear option is require is which we read thew file.. 
///   if the file does't exists then it create the file.

let appendFile = fs.appendFileSync('newJsFile.js','\nconsole.log("susanta");', 'utf-8');
console.log(appendFile)
let readAppendF = fs.readFileSync('newJsFile.js', 'utf-8');
console.log(readAppendF)
