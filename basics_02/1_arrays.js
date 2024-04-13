const myArr = [0,1,2,3,4,5,6,7]
const myHeroes = ["shaktiman","Doga"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);

myArr.push(10)
myArr.push(11)
console.log(myArr);
myArr.pop()
console.log(myArr)

myArr.unshift(101)
myArr.unshift(220)
console.log(myArr)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);//string

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2)

console.log("C",myArr); //on using splice original array manupulated on spliced element removed from original array

const marvelHeroe