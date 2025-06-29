///  to use read line we have to use read line module 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please enter yor name : ', (userName) => {
    userName = fixName(userName);
    console.log('\n------- : Welcome', userName, 'to CIL ToDo list : -------\n\n');
    rl.close();

});



const fixName = (userName) => {
    let finalName = '';
    
    for (let i = 0; i < userName.length; i++) {
        if (i === 0 || userName[i - 1] === " ") {
            finalName += userName[i].toUpperCase();
        } else {
            finalName += userName[i].toLowerCase();
        }
    }
    return finalName;
};
// console.log('ok its running');








