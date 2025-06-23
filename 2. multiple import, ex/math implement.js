/*
const add = require("./math");
const sub = require("./math");
const div = require("./math");
const mul = require("./math");

console.log("Sum of", 9, "and", 5, "is : ", sub(9, 5));  // here in this example we see that add,sum.. all can replace by div 
// because in the math.js file only div fun is exports 
console.log("Sum of", 4, "and", 5, "is : ", add(4, 5));

*/ 


// for this problem we need destructing like this

const {add, sub, mul, div, myBrother, myName} = require("./math");  // we don't need to maintain the order like the order in which we can give in exports;
// we need maintain then seeling of each "destructured properties"

console.log("Sum of", 8, "and", 4, "is : ", add(8, 4));
console.log("Subtraction of", 9, "and", 5, "is : ", sub(9, 5));
console.log("Division of", 20, "and", 3, "is : ", div(20, 3));
console.log("Multiplication of", 4, "and", 5, "is : ", mul(4, 5));
console.log("Hello my name is ", myName);
console.log("Hello my brother name is ", myBrother.bName);


//     another way : 

const mathFile = require("./math"); // in side the math.js file {add, sub, mul, div, myBrother, myName} this is stay same

console.log("Sum of", 80, "and", 40, "is : ", mathFile.add(80, 40));
console.log("Hello my brother name is ", mathFile.myBrother.bName);