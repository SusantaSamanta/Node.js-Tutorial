const path = require("path");

// console.log(path)
console.log(__dirname);
console.log(__filename);

// path.parse();   : return the details about the given path.
const pathShow = path.parse(__filename);
console.log('path.parse() show this :   \n',pathShow);


// path.join()   : use to joins multiple pathe segments in to into one, 
//                 using the separator '/' or '\' depending on the current os.
const myPath = path.join('myFolder', 'subFolder', 'myFile.py');
console.log('\npath.join() show this : \n',myPath);


// path.resolve()   : it give the absolute path 
console.log('\npath.resolve() show this : \n',path.resolve(myPath));

// path.extname()   : it give the extension name of the given path. 
console.log('\npath.extname() show this : ',path.extname(myPath));

// path.basename()   : it give the last part of the given path (file name and extension name). 
console.log('\npath.basename() show this : ',path.basename(myPath));

// path.dirname()   : it give the directory part of the given path. 
console.log('\npath.dirname() show this : ',path.dirname(myPath));


// path.sep   : it give the path separator based on the current os. 
console.log('\npath.sep() show this : ',path.sep);
