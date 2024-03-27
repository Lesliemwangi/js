/**
 * Functions
 * 
 * pieces that allow reusability
 * 
 * Can accept one or more parameters separate by commas
 * 
 * Parameters - variables listed in the parenthesis of functions
 * Arguments -values that are passed when calling/invoking a function
 */

// syntax
function functionName() {
    // function logic/code
}

console.log("Good evening Willis")
console.log("Good evening Cyrus")

function greeting(name, timeOfDay) {
    console.log(`Good ${timeOfDay} ${name}`)
}

// call/invoke the function in order for it to work or get executed
greeting("Leslie", "evening")
greeting("Martin", "morning")

console.log(34 + 23)
console.log(546 + 341)

function sum(numOne, numTwo) {
    console.log(numOne + numTwo)
    return 0
    return numOne + numTwo  // it stops execution a function
    console.log(anything)  // will not be executed
}

console.log(sum(3, 9))
sum(89, 3)

const sumOfTwoNumbers = sum(9, 10)

// console.log(sumOfTwoNumbers)

const otherSum = sum(10, 34)

// console.log(otherSum)