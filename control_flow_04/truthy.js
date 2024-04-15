const userEmail = "saket@ai" //string ke andar kuch h to man liya gya h ki wo true hai
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
// "0",'false'," ", [],{},function(){}

const userEmail1 = []
if (userEmail1.length === 0) {
    console.log("Array is emplty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//nullish coalescing operator(??): null undefined

let val1;
// val1 = 5 ?? 10 -> 5
// val1 = null ?? 10 -> 10
// val1 = undefined ?? 15 -> 15
val1 = null ?? 10 ?? 20 //10

console.log(val1);


//terniary operator
// condition ? true : false 
 const ice = 100 
 ice <= 80? console.log("less than 80") : console.log("more than 80");
