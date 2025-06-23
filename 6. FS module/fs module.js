const fs = require('fs');
///////////// fs.writeFileSync(filePath, DataInString, options);
/// potion mean in whish formate we can write the file . in write file is not so impotent. using option is good for code


const myFile = 'myFile.txt';  
const writeFile  = fs.writeFileSync(myFile, 'Hello my name is Susanta Samanta', 'utf-8');
console.log(writeFile)    /// this how file create 


//// in the above way we can create file same directory but if we create another pathe so we have to give the path

//// one trick example is using path module 
const path = require('path');
let myJsFile = myJavaScript = 'console.js';
console.log(__dirname);  // o/p : C:\Users\HP\Desktop\Node js by thapa\6. FS module
const  myPathIs = path.join(__dirname,  myJsFile);
console.log(myPathIs);  // o/p :  C:\Users\HP\Desktop\Node js by thapa\6. FS module\console.js
// now we create the file console.js file using the writeFileSync() fun. (if we not cerate path link in to the writeFileSync() also work

////// #note  we have to give the the valid folder or directory into writeFileSync()

const writeFile2 = fs.writeFileSync(
    myPathIs, 
    'console.log("hello world");;;/;/;/;', 
    'utf-8'
);
console.log(writeFile2);


console.log('\n\nthis part is for \n\n\n');

///////////// fs.readFileSync(filePath, options);  ////////////////
/// *note : hear option is require is which we read thew file.. 

let readFile = fs.readFileSync('console.js', 'utf-8')
console.log(readFile)

// using the  path                         // path is not impotent // because js automatically fill the path if we put the file name \

readFile = fs.readFileSync(myPathIs, 'utf-8')
console.log(readFile);



/// ** note : in writefileS() if the file in the parameter not created then it automatically create the file 
///           but in we give the already created file name 

/// ** note : if we run writefile() to time with data the previous data overate with new data



