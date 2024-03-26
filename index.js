/**
 * Data types:
 *
 * Undefined - Something that hasn't been defined. A variable that hasn't been set to be anything yet
 *
 * Null - Nothing. A variable that has been set to be something  but it is nothing
 *
 * Boolean - True or false
 *
 * String - Any sort of text
 *
 * Symbol - An immutable primitive value that is unique
 *
 * Number - Number
 *
 * Object - Can store a lot of different key value pairs
 *
 */

/**
 * Variables - These allow the computer to store and manipulate data in a dynamic fashion (label to point the data)
 *
 */

var myName = "Beau";
myName = 8;
// var is going to be used throughout your whole program

let ourName = "freeCodeCamp";
// let will only be used within the scope of where you declared that

const pi = 3.14;
//  const is a variable that should never change

// STORING VALUES WITH ASSIGNMENT OPERATOR
// Declaring variables
var a;

// Assigning variables
var b = 2;
console.log(a);

a = 7;
b = a;

// (declaring it "var b" then "=" is the assignment operator)

console.log(a);

// INITIALIZING VARIABLES WITH ASSIGNMENT OPERATOR
var a = 9;
// var a is declaring it and = 9 is initializing it with the assignment operator ("=")

// UNINITIALIZED VARIABLES
var a;
var b;
var c;

// initialize the above variables
var a = 5;
var b = 10;
var c = "I am a ";

a = a + 1;
console.log(a);

b = b + 5;
console.log(b);

c = c + "Lady!";
console.log(c);

// CASE SENSITIVITY IN VARIABLES
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
console.log(studlyCapVar);

properCamelCase = "A String";
console.log(properCamelCase);

titleCaseOver = 9000;
console.log(titleCaseOver);

// ADDING NUMBERS
var sum = 10 + 6;
console.log(sum);

// SUBTRACTING NUMBERS
var difference = 50 - 38;
console.log(difference);

// MULTIPLYING NUMBERS
var product = 9 * 6;
console.log(product);

// DIVIDING NUMBERS
var quotient = 70 / 5;
console.log(quotient);

// INCREMENTING NUMBERS
// This is adding 1 to a number
var myVar = 87;
myVar = myVar + 1;
console.log(myVar);

var myVar = 57;
myVar++;
console.log(myVar);

// DECREMENTING NUMBERS
// This is subtracting 1 to a number
var myVar = 81;
myVar = myVar - 1;
console.log(myVar);

var myVar = 51;
myVar--;
console.log(myVar);

// DECIMAL NUMBERS
var ourDecimal = 5.9;
console.log(ourDecimal);

var myDecimal = 0.00123;
console.log(myDecimal);

// MULTIPLY DECIMALS
var product = 2.5 * 2.0;
console.log(product);

// DIVIDE DECIMALS
var quotient = 3.6 / 1.2;
console.log(quotient);

// FINDING A REMINDER
var remainder;
remainder = 11 % 3;
console.log(remainder);

// COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION
var a = 3;
a = a + 12;
console.log(a);

var a = 3;
a += 12;
console.log(a);

var a = 3;
a += a;
console.log(a);

// COMPOUND STATEMENT WITH AUGMENTED SUBTRACTION
var a = 3;
a = a - 12;
console.log(a);

var a = 3;
a -= 12;
console.log(a);

var a = 3;
a -= a;
console.log(a);

// COMPOUND ASSIGNMENT WITH AUGMENTED MULTIPLICATION
var a = 3;
a = a * 12;
console.log(a);

var a = 3;
a *= 12;
console.log(a);

var a = 3;
a *= a;
console.log(a);

// COMPOUND ASSIGNMENT WITH AUGMENTED DIVISION
var a = 3;
a = a / 12;
console.log(a);

var a = 3;
a /= 12;
console.log(a);

var a = 3;
a /= a;
console.log(a);

// DECLARE STRING VALUABLES
var firstName = "Les";
console.log(firstName);

var lastName = "Liz";
console.log(lastName);

var myFirstName = "Shiks";
console.log(myFirstName);

var myLastName = "Lizzie";
console.log(myLastName);

// ESCAPING LITERAL QUOTES IN STRINGS
// if you want to escape a quote, you put \(backslash) before the quotation mark
var myStr = 'I am a "double quoted " string inside " double quotes';
console.log(myStr);

// QUOTING STRINGS WITH SINGLE QUOTES
var myStr = '<a href="https://www.example.com" target="_blank">link</a>';
console.log(myStr);

// ESCAPE SEQUENCES IN STRINGS
/**
 * CODE OUTPUT
 *
 * \'   single quote
 * \"   double quote
 * \\   backslash
 * \n   newline
 * \r   carriage return
 * \t   tab
 * \b   backspace
 * \f   form feed
 */

var myStr = "firstLine\n\t\\secondLine\nthirdLine";
console.log(myStr);

// CONCATENATING STRINGS WITH PLUS OPERATOR
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

// CONSTRUCTING STRINGS WITH VARIABLES
var myName = "Joy";
var myStr = "Hello my name is " + myName + ", how are you?";
console.log(myStr);

// APPENDING VARIABLES TO STRINGS
// Combining/ concatenating a variable's value with a string
var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

// FINDING LENGTH OF STRING
var firstNameLength = 0;
var firstName = "Luciannah";
firstNameLength = firstName.length;
console.log(firstNameLength);

// BRACKET NOTATION TO FIND FIRST CHARACTER IN STRING
var firstLetterOfFirstName = "";
var firstName = "Luciannah";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

// STRING IMMUTABULITY - cannot be altered once they are created
var myStr = " Jello World";
myStr = "Hello World";
console.log(myStr);

// BRACKET NOTATION TO FIND NTH CHARACTER IN STRING
var lastName = "Phoi";
lastLetterOfLastName = lastName[lastName.length - 4];
console.log(lastName);

//* WORD BLANKS
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The" + myAdjective + myNoun + myVerb + " to the store" + myAdverb;
  return result;
  console.log(wordBlanks("dog", "big", "ran", "quickly"));
}

// STORE MULTIPLE VALUES WITH ARRAYS
var ourArray = ["John", 23];
console.log(ourArray);

// NESTED ARRAYS
var ourArray = [
  ["the universe", 42],
  ["everything", 101010],
];
console.log(ourArray);

// ACCESS ARRAY DATA WITH INDEXES
var ourArray = [50, 60, 70];
var ourData = ourArray[2];
console.log(ourArray);
console.log(ourData);

// MODIFY ARRAY DATA WITH INDEXES
var ourArray = [18, 64, 99];
ourArray[3] = 45;
console.log(ourArray);

// ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES
var ourArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
var ourData = ourArray[2][1];
console.log(ourArray);
console.log(ourData);

// MANIPULATE ARRAYS WITH PUSH() - adds elements at the end
var ourArray = ["Luciannah", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);

// MANIPULATE ARRAYS WITH POP() - removes elements at the end
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
console.log(removedFromOurArray);
console.log(ourArray);

// MANIPULATE ARRAYS WITH SHIFT() - removes elements at the beginning
var ourArray = ["Luciannah", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);
console.log(ourArray);

// MANIPULATE ARRAYS WITH UNSHIFT() - adds elements at the beginning
var ourArray = ["Luciannah", "J", "cat"];
ourArray.unshift("Happy");
console.log(ourArray);

var ourArray = ["Luciannah", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray);

// SHOPPING LIST
var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["bananas", 3],
  ["juice", 2],
  ["eggs", 12],
];
console.log(myList);

// WRITE REUSABLE CODE WITH FUNCTIONS
function ourReusableFunction() {
  console.log("Hello, World");
}
ourReusableFunction();
ourReusableFunction();

// PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
function ourFunctionWithArgs(a, b) {
  console.log(a + b);
}
ourFunctionWithArgs(10, 5);
ourFunctionWithArgs(30, 40);

// // GLOBAL SCOPE AND FUNCTIONS
// /* scope - visibility of variables.
// Variables which are defined outside of a function have global scope
// Global scope means they can be seen everywhere in your javaScript code*/
// var myGlobal = 10;

// function fun1() {
//   var oopsGlobal = 5;
// }

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += "oopsGlobal: " + oopsGlobal;
//   }
// }
// console.log(output);

// LOCAL SCOPE AND FUNCTIONS

