//if

const isUserLoggedIn = true
const temp = 56
if (temp < 67) {
    console.log("less than 67");
}

//<,>,<=,>=,==,===,!=,!==
//if-else

if (temp < 67) {
    console.log("less than 67");
}else{
console.log("temp is greater than 67");
}


const balance = 10000;
if(balance > 500) console.log("test"),console.log("test1"); //aisa nhi krna h jbki galat nhi h

//if-else ladder/nested
if(balance<500){
    console.log("less than ");
} else if (balance<750) {
    console.log("less than 750");
} else if (balance,900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("allowed to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}