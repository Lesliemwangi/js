// functions
// parameters - Variables that are placed inside a function
// Arguments - values that are passed when calling/ invoking

// 1. Creating using a function
// syntax
function functionName() {
  console.log("I am inside a function");
}

function greetings(firstName, timeOfDay) {
  console.log(`Good ${timeOfDay} ${firstName} have a nice day`);
}

function greetingJane() {
  console.log("Good morning, Jane have a nice day");
}

// in order for a declared function to work/ to be executed,
// we have to call/ invoke
functionName();

functionName();

// functionName()

greetings(`John`, `morning`);

greetings(`Jane`, `afternoon`);

greetings(`Paul`, `evening`);

console.log("first".toUpperCase(3));
console.log("moringa".slice(0));

// const num = 23
// console.log(num.toFixed(4))

function capitalize(str) {
  // console.log(str[0])
  // console.log(str.charAt(0).toUpperCase())
  // console.log(str.slice(0,3))
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  // return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalize("leslie lucy"));
console.log(capitalize("hp"));

// 2. Arrow functions
// syntax
const lastName = "john";
const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalizeFirstLetter("moringa"));
console.log(capitalizeFirstLetter(lastName));

// collection of key/ value pairs separated by commas

const buildPerson = (fullName, address) => {
  return {
    fullName: fullName,
    address: address,
  };
};
console.log(
  buildPerson("John Doe", {
    county: "Nairobi",
  })
);

const car = {
  model: "Audi",
  owner: {
    fullName: "John Doe",
  },
  yearOfManufacture: 2019,
  previouslyOwned: true,
  previousOwners: ["Les", "Lie"],
};
console.log(
  buildPerson("Tony Shark", {
    county: "Nairobi",
  })
);
/**
 * in JS funstions are referred to as being first class
 * meaning functions as other values
 */

// callback functions - functions passed as values into other functions and may/ maynot be exectued
function functionA() {
    console.log("I am inside function A")
}

function functionB() {
    console.log("I am inside function B")
}

functionA(function someCoolName() {
    console.log("Inside anonymous function")
})

functionA(functionB)

const name = "John"

function printName(word) {
    console.log()
}
printName(name)

function sum(numberOne) {
    console.log(numberOne + 34)
}

const someOtherNumber = 2
sum(someOtherNumber)



function simple(str ,randomName) {
    console.log(str)
    console.log( randomName)
    randomName()
}

const schoolName = "Moringa"

const anotherFunction = () => {
    console.log("I am inside another function")
}

// simple(schoolName, anotherFunction)

function calculate(numberOne, numberTwo) {
    // const sumOfTwoNumbers = numberOne + numberTwo
    return sumOfTwoNumbers
}

const another = calculate(3, 5)
console.log(sumOfTwoNumbers)

// const doesNotMatter = calculate(5, 5)
// doesNotMatter()