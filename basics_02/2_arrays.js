const marvel_heroes  = ["thor","hulk","antman","ironman"]
const dc_heroes = ["flash","batman","superman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

const allhEROES = marvel_heroes.concat(dc_heroes)
console.log(allhEROES);

const all_heroes = [...marvel_heroes,...dc_heroes]//spread
console.log(all_heroes);

const another_array = [1,2,3,[4,5,6],7,8,[5,6,7,[56,78]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);

console.log( Array.isArray("SAKET"))
console.log(Array.from("saket"));
console.log(Array.from({name: "saket"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));