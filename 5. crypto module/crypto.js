//    crypto module : It generate cryptographically strong data.
//          ude : for generate token unique id 


////      1. crypto.randomBytes(size); size must be in between 2**3-1  2147483647

const crypto = require('crypto');
//console.log(randomValue)

let randomValue = crypto.randomBytes(10);
console.log(randomValue)   // to convert this buffer we have to do  this 

randomValue = crypto.randomBytes(10).toString();
console.log(randomValue) // output : �s21�G)� �

randomValue = crypto.randomBytes(10).toString('hex');
console.log(randomValue) // output : fb878ddcf40b8703873d   // in here 20 hax value is generate because 
// inside the randomBytes parameter value * 2 in this case 20.



///////     crypto.createHash(algorithm_is_which_you_can_create_hash)      // algorithm like : sah1, sah256, sah224, sah2556, sah3, sah512, MD5 ......


randomValue = crypto.createHash("sha256");
console.log(randomValue) /* output: Hash {
                                         _options: undefined,
                                         [Symbol(kHandle)]: Hash {},
                                         [Symbol(kState)]: { [Symbol(kFinalized)]: false }
                                    }
*/
let myToken = crypto.createHash("sha256").update('Susanta').digest('hex');
console.log(myToken) // output : 95a64020cafdd831062f209276f25b933cb123dea6fc2bd30558928a6943a211

//// if we not change don't change the .updata() parameter value then this hex code does't change
//       for this createHash("sha256") and digest('hex')   we explain it in below with another example

let myToken2 = crypto.createHash("sha256").update('Susanta').digest('hex');
console.log(myToken2) // output : 95a64020cafdd831062f209276f25b933cb123dea6fc2bd30558928a6943a211

// in this case myToken , myToken2 are same because of the same .update('Susanta) value if we change then o/p change only

// like this example : 
let myToken3 = crypto.createHash("sha256").update('Susanta Samanta').digest('hex');
console.log(myToken3) // output : 1c0ddac273b8eed3868bbd4f5596ae42fe1b210b73ae30413318d5277cb4add1
// now the o/p change for different .update value 


 
