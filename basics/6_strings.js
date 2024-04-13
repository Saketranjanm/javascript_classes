const name = "saket-sak"
const repoCount = 50
console.log(name + repoCount + " Value") //old one
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//modern using baptrick
const l = new String('saket-sak') // new one in this we can use many methods
console.log(l.__proto__)
console.log(l[0])
console.log(l.toUpperCase());
console.log(l.charAt(4));
console.log(l.indexOf('t'));

const sub = l.substring(0,9)
console.log(sub);

const anotherstring = l.slice(-8,4)
console.log(anotherstring);

const newString = "     saket       "
console.log(newString.trim());

const url = "http://saket.com/saket%20ranjan"
console.log(url.replace('%20','-'));
console.log(url.includes('saket'));//true

console.log(l.split('-'));