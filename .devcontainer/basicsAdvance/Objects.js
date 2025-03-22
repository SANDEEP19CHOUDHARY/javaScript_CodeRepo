//Object Literal
const mySym = Symbol("keyOne");
const user = {
    name:"Sandeep Choudhary",
    "short name":"skc",
    [mySym]:"myKeyOne",
    age: 18,
    email:"skc838182@gmail.com",
    location:"Noida",
    isLoggedIn:false,
    lastLoginDays:["Sunday", "Wednesday"]
}

/*
console.log(user.email)
console.log(user["email"])
console.log(user["short name"])
console.log(user[mySym])
*/

//Object.freeze(user)
//user.email="sandeep@yopmail.com"

console.log(user)

user.greeting=function(){
    console.log("Hello javaScript")
}

user.greetingTwo=function(){
    console.log(`Hello javaScript, ${this.name}`)
    //console.log(`Hello javaScript, ${user.name}`)
}

user.greeting();
user.greetingTwo();

/*
Method	                          Description
Object.keys(obj)	            Returns an array of keys
Object.values(obj)	            Returns an array of values
Object.entries(obj)	            Returns key-value pairs
Object.assign(target, source)	Copies properties to target
Object.freeze(obj)      	    Prevents modification
Object.seal(obj)	            Allows modification but prevents addition/deletion
Object.hasOwnProperty(key)	    Checks if key exists
Object.getPrototypeOf(obj)	    Gets the prototype of an object
*/