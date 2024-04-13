//object literals
const mySym = Symbol("key1")

const JsUser = {
    name:"saket",
    age: 21,
    location:"bengaluru",
    email : "saket@gmail.com",
    isLoggedIn : false,
    [mySym] : "mykey1",
    lastLoginDays:["Monday","Saturdays"],
    "full name":"saket ranjan"
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(JsUser.full name); => NOT ALLOWED
console.log(JsUser[mySym]);
JsUser.email = "saket@chatgpt.com"
console.log(JsUser);
//Object.freeze(JsUser)
JsUser.email = "saketranjan@bnmit.in"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());