const accountId=1443879
let accountEmail="skc838182@gmail.com"
var accountPassword="Test@123"
accountCity="Saharanpur"
let accountState;
//accountId=2 //Not Allowed
//node .devcontainer/basics/variables.jsaccountPassword="28153"

console.log(accountId);

/* Prefer not to use var 
because of issue of 
block scope and 
functional space */
console.table([accountId,accountPassword,accountCity,accountEmail,accountState])