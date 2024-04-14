//destructuring
const course = {
    coursename : "Js in hindi",
    price: "999",
    Instructor : "Hitesh"
}

const {Instructor,price : pr,coursename:name}= course
console.log(Instructor,pr,name);

