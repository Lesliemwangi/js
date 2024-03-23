/**
 * FUNCTIONS - Codes used to reduce repetition in another code
 * A bunch of blocks that you keep together to perform something which otherwise will be very, very repeated in the code
 * 
 * Functions & Methods
 * Declaration & Defination - creating a function  with  bunch of logic 
 * 
 * Arguments & Parameters
 * Parameter - something that you pass to a function while declaring/ defining the function (function printMe(param)) 
 * Argument - when calling/ invoking a function, the actual value you pass is an argument (printMe('dog'))
 *  
 * Callback & Higher Order Function
 * 
 * Functions Declaration 
 */

function printMe(param) {
    console.log(param);
}
printMe('dog') 

// Expressions
const printMeAgain = function() {
    console.log('print')
};
printMeAgain('print')

/**
 * Returning a function
 * 
 * let p = x() - in this expression, we are having a variable called 'p' and the 'p' value is not the function but the value we get from executing a function
 * 
 * A function name along with a paranthesis means executing calling/ invoking a function
 * 
 * a function name without a paranthesis means its just the string representation of a function 
 * 
 */

function sum(a, b) {
    return a + b; 
}
sum(2, 3)

function sum(a, b) {
    let ret = a + b;
    return ret;
}

function calc(a, b) {
    return (2 * (a + b));
}
calc(2, 3)
console.log(2 *(2 + 3))