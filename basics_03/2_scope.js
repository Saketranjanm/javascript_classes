let a = 300
const b = 400
var c = 392

if (true) {
    let a = 10
const b = 20
var c = 30
console.log("Inner a:",a); //10
console.log("Inner b:",b); //20
console.log("Inner c :",c);//30
}

console.log("outer a :",a);//300
console.log("outer b :",b);//400
console.log("outer c :",c); // 30 avoid var


function one(){
    const username = "saket"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); ->not executed
    two()
}
one()

/***********************************interesting ************************************* */

console.log(addone(5))
function addone(num){
    return num+1
}

// addTwo(5)->gives error (hoisting)
const addTwo = function(num){
    return num+2
}

