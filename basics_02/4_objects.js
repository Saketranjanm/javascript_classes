const tinderUser = new Object()

tinderUser.id = " 123abc"
tinderUser.name = "saket"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "saketr@gmail.com",
    fullname:{
        userfullname:{
                firstname : "saket",
                lastname: "ranjan"
        }
    }

}
console.log(regularUser.fullname.userfullname.lastname);

const obj1 ={ 1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = {obj1,obj2} ->one way
const obj4 = {5:"a",6:"b"}
//const obj3 = Object.assign({},obj1,obj2,obj4) -> second way
const obj3 = {...obj1,...obj2,...obj4} //third way , we use this mostly

console.log(obj3);

//from database
 const users = [
    {
        id:1,
        email:"hatmail@mail.com"
    },
    {
        id:1,
        email:"hatmail@mail.com"
    },
    {
        id:1,
        email:"hatmail@mail.com"
    }
]

console.log( users[1].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));