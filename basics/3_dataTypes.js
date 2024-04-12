"use strict"; //treate all js code as newer version

let name = "saket" //string
let age = 21  //number
let isLoggedIn= false // boolean

/**
 number =>2 to power 53
 bigInt
 string => ""
 boolean => true/false
 null => standalone value/object
 undefined => value not assigned
 symbol => unique
 object 
 */
console.log(typeof undefined) //-> undefined
console.log(typeof null);   // object 

let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id === anotherId); //false


// ******************* summary ***********************//
/*
1.primitive -> stack memory used
7 types : String,Number,Boolean,undefined,null,Symbol,BigInt
2.Refernce type(Non Primitive) -> heap memory used
Arrays,Objects,Functions
in stack memory copy of particular block is given so when you change in one other is not changed
in heap memory refrences has been shared so anything change in heap memory changed for all
*/