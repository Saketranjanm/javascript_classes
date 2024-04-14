function SayMyName(){
    console.log("S");
    console.log("A");
    console.log("K");
    console.log("E");
    console.log("T");

}
SayMyName()

function addTwoNumbers(num1,num2){
   console.log( num1+num2)
}

addTwoNumbers(5,9);

function addTwoNumberss(num1,num2){
    // let result = num1+num2
    return num1+num2
    console.log("saket");//out of scope as comes after return statement so not going to print
 }
 
 const result = addTwoNumberss(5,10);
 console.log("Result : ", result);

 function loginUserMessage(username){
    if (username===undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
 }
 console.log(loginUserMessage())
 console.log(loginUserMessage("saket"))


 function calculateCartPrice(...num1){//here ... is rest opeartor
    return num1
 }
 console.log(calculateCartPrice(200,400,500));

 const user = {
    username:"saket",
    price:199
 }
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
 }

 handleObject(user)
 handleObject({
    username:"nikhil",
    price:999
 })

 const myNewArray = [200,300,400,800]
 function retrunSecondValue(getArray){
    return getArray[1]
 }
 console.log(retrunSecondValue(myNewArray));