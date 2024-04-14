//Immediately Invoked Function Expression(IIFE)
//named iife
(function chai(){
console.log(`DB CONNECTED`);
})(); // don forget to used semicolon while writting two iife

//unamed
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('saket')