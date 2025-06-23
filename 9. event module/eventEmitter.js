

//////    1.     emit(eventName, [args])
//         it is like function call it have eventName and arguments

//////    2.     on(eventName, [args])
//         it is like function definition it have eventName and arguments. it execute when an event is emitted.


import eventEmitter from 'events'; // import eventEmitter class


// now create an object of eventEmitter

const emitter = new eventEmitter();

// define an event using on()
emitter.on('show', () => console.log('hello world'));   /// like function definition 

// trigger or call the event using emit.()
emitter.emit('show');

/////       now ursine normal parameter 
emitter.on('showName', (fname, lname) => {
    console.log(`Welcome ${fname} ${lname} in event.`);
});

emitter.emit('showName', 'Susanta', 'Samanta');   // call withe parameter


emitter.on('showName', (fname, lname) => {
    console.log(`Welcome ${fname} ${lname} in event`);
});
emitter.emit('showName', 'Suman', 'Samanta');   

// if we declare two or more event then last emit(call) trigger all above event(on('')).




/////        now with parameter pass as an object

emitter.on('show2', (args) => {
    console.log(`my name i ${args.name}. I am ${args.age} year old.`);
});

emitter.emit('show2', {
    name: 'Susanta Samanta', 
    age: 21
});


// call another fun by emitter function 
const student = () => {
    console.log('THis is student fun');
}

emitter.on('callFun', student);  // if use parameter then use arrow function
emitter.emit('callFun');




emitter.on("Data", () => {
    console.log('ok run');
    
})
let da = "Data"
emitter.emit(da)
da = "data"






/// icon : metical icon
// theme : cobalt, github, night owl,




