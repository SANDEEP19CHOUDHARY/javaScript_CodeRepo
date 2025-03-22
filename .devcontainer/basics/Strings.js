//**************Operations*******************//

let value=3;
let negValue= -value;
//console.log(negValue);

let str1="Sandeep"
let str2=" hello!"
let str3=str1+str2
/*console.log(str3)
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")*/

//*******************DataTypes Summary*************//

/*primitive(Call by value) (Stack)--> String, Number, Boolean, Null, Undefined, Symbol, BigInt */
/*Non-Primitive(Call by reference)(Heap)--> Arrays, Object, Functions */
/* JavaScript is a dynamically typed language, meaning that variables do not have a fixed type, and their type can change during runtime.*/
/*typeOf(null)->Object; */
const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id===anotherId)

/* ********** Memory--> Heap/Stack *************** */

let myname="Sandeep Choudhary"
let anotherName= myname

let user={
    email:"skc838182@gmail.com",
    upi:"user@ybl"
}

let userTwo=user
userTwo.email="sandeep@gmail.com"
console.log(user.email)
console.log(userTwo.email)

console.log(anotherName)
