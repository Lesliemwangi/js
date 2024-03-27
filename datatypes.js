//

// 1. strings
const firstName = "Jane";
const lastName = " Doe";
const fullName = "Jane Doe";

console.log(typeof firstName);
console.log(typeof fullName);

// string concatenation using + operator
console.log(firstName + " " + lastName);

// curly brackets -> {}
// parenthesis (soft brackets) -> ()
// square brackets -> []

// string interpolation - injecting values into strings
console.log(`${firstName} ${lastName}, age is ${100 - 45}`);
console.log("${firstName} ${lastName}, age is ${100 -45}");

// 2. Numbers
console.log(typeof 3);
console.log(typeof -34);
console.log(typeof 45.2334);

// 3. boolean
console.log(typeof true);
console.log(typeof false);

// 4. objects (arrays) - collection of date consisting of key values pairs
const student = {
  firstName: "Jane",
  lastName: "Doe",
  cohort: "SDT-FT09",
  class: "Bravo",
  studentEmail: "jane.doe@student.moringaschool.com",
  age: "23",
};

console.log(typeof student);

// 4.a arrays - list of values enclosed using square brackets[]
const students = ["John", "Leslie", "Imani", 34];
const scores = [23, 45, 34, 34];
console.log(typeof students);

// 5. null - represents an intentionally absent value
const newStudent = null;
console.log(newStudent);

// 6. undefined - not assigned any value
let age;
console.log(age);

// 7. symbols
