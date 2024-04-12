const accountId = 144553
let accountEmail = "saketranjan@gmail.com"
var accountPassword = "12345"
accountCity = "Bengaluru"
let accountState;
//accountId = 2     -> not allowed
accountEmail = "saket@gmail.com"
accountPassword = "221345"
accountCity = "jaipur"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
const -> used for constant
prefer not to use var
because of issue in the block scope and functional scope
*/