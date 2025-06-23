const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const div = (a, b) => {
    return a / b;
}
const mul = (a, b) => {
    return a * b;
}
const myName = "Susanta Samanta";

const myBrother = {
    bName : "Suman Samanta",
}



// module.exports = add; // if we use multiple export then at the last exports replace all above exports
// module.exports = sub;
// module.exports = mul;
// module.exports = div; //  this can replace add, sub, mul

// for this problem we need destructing like this

module.exports = {add, sub, mul, div, myName, myBrother};