

const fun2 = () => {
    console.log('fun2 running');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log('Ok fun2 successful');
        }, 7000);
    })
}
const fun1 = () => {
    console.log('fun1 running');
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            
            await fun2();
            resolve();
            console.log('Ok fun1 successful');
        }, 5000);
    })
}



const mainFun = async () => {
    try{
        await fun1();
        console.log('then 1');
        await fun2();
        console.log('then 2');
    }catch(err){
        console.log(err)
    }
}
mainFun();

