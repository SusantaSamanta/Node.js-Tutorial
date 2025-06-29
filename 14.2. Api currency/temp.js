
let a = 49.6;
let b = 'lock';

a = Number(a);
b = '98y';
b = b.replace(/\d/g, '');
console.log(a);
console.log(b);

if (a && b)
    console.log(a, b);
else
    console.log('not')


    let c = '';
    if(c)
        console.log('ok')