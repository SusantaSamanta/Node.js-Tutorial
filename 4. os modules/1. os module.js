const { log } = require("console");
const os = require("os");

console.log('platform : ',os.platform());   // platform information

console.log('User : ',os.userInfo());   // user information

console.log("CPU architecture : ",os.arch()); 

console.log('Free memory in bytes :',os.freemem()); 

console.log('Total memory in bytes :',os.totalmem()); 

console.log('System uptime in second :',os.uptime()); 

console.log('Home directory :',os.homedir()); 

console.log('Host name :',os.hostname()); 

console.log('Network interface :',os.networkInterfaces()); 

console.log('CPU information :',os.cpus()); 

console.log('Temporary directory :',os.tmpdir()); 

console.log('Operating system :',os.type()); 











