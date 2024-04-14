const user = {
    username : "saket",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this); //this refers to current context
    }

}
user.welcomeMessage()
user.username= "sam"
user.welcomeMessage()
console.log(this);


function chai1(){
    let username = "saket"
    console.log(this.username);//undefined , so we cant use this in functions as we used earlier
}
chai1()

const chai =() => {
    let username = "saket"
    console.log(this);
}
chai()

//arrow functions
const addTwo1 = (num1,num2) => {
    return num1+num2
}
console.log(addTwo1(3,4));

const addTwo = (num1,num2) => (num1+num2 )  //implicit return
console.log(addTwo(3,4));

const addTwo2 = (num1,num2) => ({username: "saket"})
console.log(addTwo2(3,2));