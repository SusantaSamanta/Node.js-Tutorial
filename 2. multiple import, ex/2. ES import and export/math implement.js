

import {add, sub, mul, div, myBrother, myName} from "./math.js";  // we don't need to maintain the order like the order in which we can give in exports;
// we need maintain then seeling of each "destructured properties"

console.log("Sum of", 8, "and", 4, "is : ", add(8, 4));
console.log("Subtraction of", 9, "and", 5, "is : ", sub(9, 5));
console.log("Division of", 20, "and", 3, "is : ", div(20, 3));
console.log("Multiplication of", 4, "and", 5, "is : ", mul(4, 5));
console.log("Hello my name is ", myName);
console.log("Hello my brother name is ", myBrother.bName);


console.log('\n\n\n');



//     another way : 
import * as mathFun from './math.js';

console.log("Subtraction of", 9, "and", 5, "is : ", mathFun.sub(9000, 5000));   /// where .sub name is write as it is we export
console.log("Hello my name is ", mathFun.myName);


