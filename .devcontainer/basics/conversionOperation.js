let score="bb63"
//console.log(typeof(score))

let valueInNumber=Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

//Number "33"->33
//"aa33"->NaN
//True->1, false->0

//let isLoggedin=1;
let isLoggedin="Sandeep"
let booleanIsLoggedIn=Boolean(isLoggedin)
//console.log(booleanIsLoggedIn)

//1->true; 0->false
//""->false
//"sandeep"-> true

let value=3
let negValue=-value
//console.log(negValue)

let str1="hello"
let str2="Sandeep"
let str3= str1+str2
//console.log(str3)
/*console.log("2"+1+2)
console.log(1+2+"3")
console.log(1+2*5%3)*/


let num1, num2, num3
num1=num2=num3=4

let gameCounter=100;
//gameCounter++;
++gameCounter;
console.log(gameCounter)
// Link to read -> https://262.ecma-international.org/14.0/index.html?_gl=1*rx8lza*_ga*NjM3NjU2ODMuMTc0MjQwNzc1Mw..*_ga_TDCK4DWEPP*MTc0MjQxMTgwOC4yLjAuMTc0MjQxMTgxNS4wLjAuMA..
// Comparision and equality check is different

//===(strict check)
console.log("2"===2)

console.log(null) // null
console.log(typeof null) // "object"

console.log(null === null) // true
console.log(null === undefined) // false
console.log(null == undefined) // true
console.log(null == false) // false
console.log(Boolean(null)) // false

// Alternatively, null is the only falsy object
console.log(!null && typeof null === "object") // true
isNull = (value) => !value && typeof value === "object"
console.log(isNull(null)) // true

console.log(typeof 37) // "number"
console.log(typeof 2.71828) // "number"
console.log(typeof Math.E) // "number"
console.log(typeof Infinity) // "number"

// The typeof NaN is "number" even though NaN means "Not-A-Number":
console.log(typeof NaN) // "number"

// Calling Number explicitly is one way to parse a number:
console.log(typeof Number(`1`)) // "number"

// The parseInt and parseFloat functions are other ways to parse:
console.log(typeof parseInt(`100`)) // "number"
console.log(typeof parseFloat(`100.01`)) // "number" 

// Parse failures lead to NaN, and NaN poisons other math:
console.log(typeof (2 * parseInt(`invalid`))) // "number"


console.log(typeof function myFunction() {}) // function
console.log(typeof class myClass {}) // function
console.log(typeof (() => {})) // function

// This includes built-in functions, for example Number.isNaN():
console.log(typeof Number.isNaN) // "function"

// But not properties, of course:
console.log(typeof "".length) // "number"

// And calling a function will check the typeof the return value:
console.log(typeof Number.isNaN()) // "boolean"
console.log(typeof Number.isNaN(37)) // "boolean"


const helloWorldObject = { hello: "world" }
console.log(typeof helloWorldObject) // 'object'
// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
const fibonacciArray = [1, 1, 2, 3, 5, 8]
console.log(typeof fibonacciArray) // 'object'
console.log(Array.isArray(helloWorldObject)) // false
console.log(Array.isArray(fibonacciArray)) // true

// There is another helper function, though it is a bit long:
console.log(Object.prototype.toString.call(helloWorldObject)) // [object Object]
console.log(Object.prototype.toString.call(fibonacciArray)) // [object Array]

// Regular expression have their own native object, RegExp
const myRegExp = /search/
console.log(typeof myRegExp) // 'object'
console.log(myRegExp instanceof RegExp) // true
console.log(Object.prototype.toString.call(myRegExp)) // [object RegExp]

// The Date native object is built-in to JavaScript
const emptyDate = new Date()
const invalidDate = new Date("fail")
console.log(typeof emptyDate) // 'object'
console.log(typeof invalidDate) // 'object'
// Checking for a date is a little trickier
console.log(emptyDate instanceof Date)
console.log(invalidDate instanceof Date)
console.log(Object.prototype.toString.call(invalidDate)) // [object Date]
// Reliable date checking requires a NaN check by checking for NaN:
console.log(invalidDate instanceof Date && !Number.isNaN(invalidDate.valueOf())) // true