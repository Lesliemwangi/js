/**
 * Boolean expressions
 *
 * Anything that evaluates to true/false
 */

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(true));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(""));
console.log(Boolean(``));

// comparision operators - compare quality of values

/**
 * strict equality operator (===)
 *
 * compares values and data types
 */
console.log(23 === 23);
console.log(23 === "23");

/**
 * Strict inequality operator (!==)
 *
 * Checks if the values are not equal plus the datatype
 */
console.log(23 !== 23);
console.log(23 !== 24);

/**
 * Loose equality (==) & inequality (!=) operator
 *
 * compares the values only
 */
console.log(23 == "23");
console.log(23 != 24);

// Number operators
console.log(12 > 34);
console.log(2 < 3);
console.log(23 > 25);
console.log(23 >= 25);

// Logical operators
// 1. NOT/bang (!) - returns the opposite of what you are talking about
console.log(!true)
console.log(!false)
console.log(!Boolean(0))

// 2. Double bang operator(!!)
console.log(!!0)
console.log(!!'somfngdf')

// 3. AND (&&)
const age = 23
const name = "Leslie"

console.log(age > 18 && name === "Leslie")
console.log(age > 18 && name === 23)

//  4. OR (||) - double pipe
console.log(age > 18 || name === "Leslie")
console.log(age > 18 || name === 23)
