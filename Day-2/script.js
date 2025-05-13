// 1. Write a function that returns the sum of two numbers.
// 2. write a function that returns the sum of all numbers regardless of # of params

/* 
Example:
for param1= 1 and param2 = 2, the outputs should be add (param1, param2)=3.

Input/Output: [time limit] 400ms (js)
[input] integer param1

Hints: 
=> arithmetic operations 
=> rest operations
=> forEach()
*/


function sum(param1, param2) {
        return param1 + param2
}
console.log(sum(1, 2)) / 3


function totalSum(...param1) {
        let total = 0;
        param1.forEach(perElem => {
               total+= perElem
        })
        return total
}
console.log(totalSum(1, 2, 3, 87)); // 93