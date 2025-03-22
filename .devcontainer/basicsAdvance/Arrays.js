const myArr = [1,1,2,3,4,5,6]
const myArray= new Array(1,2,3,4)
myArray.push(19)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift(9)
console.log(myArray)
myArray.shift()
console.log(myArray)
const newArr = myArr.join();
console.log(newArr)

/* slice & Splice
Array slice() vs splice() in JavaScript
Both slice() and splice() are used to extract or remove elements from an array, but they have key differences.
1️⃣ slice() Method (Non-Destructive)
✅ Does NOT modify the original array (returns a new array).
✅ Extracts a portion of an array.
✅ Takes two arguments: slice(start, end).
start: The index where extraction begins.
end: The index where extraction stops (not included in the result).

2️⃣ splice() Method (Destructive)
❌ Modifies the original array.
✅ Removes, replaces, or inserts elements.
✅ Takes three arguments:
splice(start, deleteCount, item1, item2, ...)
start: The index where the change begins.
deleteCount: Number of elements to remove.
*/

/* 
3️⃣ Key Differences Between slice() and splice()
Feature	                          slice()	            splice()
Modifies Original?	                ❌ No	           ✅ Yes
Returns	                          New array	            Removed elements
Purpose	                         Extracts a portion	    Removes, replaces, inserts
Affects Original Array?	          No	                Yes
Arguments	                      slice(start, end)	    splice(start, deleteCount, item1, item2, ...)

4️⃣ When to Use slice() vs splice()
Use Case	                                         Best Method
Get part of an array without modifying it	          ✅ slice()
Remove items from an array permanently	              ✅ splice()
Replace an element in-place             	          ✅ splice()
Insert elements at a specific index     	          ✅ splice()
*/

/*
Method	                Modifies Array?	Returns
push()	                ✅ Yes	New length
pop()	                ✅ Yes	Removed item
unshift()	            ✅ Yes	New length
shift()	                ✅ Yes	Removed item
slice()	                ❌ No	New array
splice()	            ✅ Yes	Removed items
indexOf()	            ❌ No	Index
includes()	            ❌ No	Boolean
find()	                ❌ No	First match
findIndex()	            ❌ No	First match index
forEach()	            ❌ No	Undefined
map()	                ❌ No	New array
filter()	            ❌ No	New array
reduce()	            ❌ No	Single value
sort()	                ✅ Yes	Sorted array
reverse()	            ✅ Yes	Reversed array
join()	                ❌ No	String
split()	                ❌ No	Array
*/
