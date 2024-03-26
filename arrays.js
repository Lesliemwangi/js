/**
 * Data structures
 *
 * Allows us to represnet other forms of data
 * like the lists(arrays) and collections(objects)
 */

// Arrays - list of values enclosed using square brackets []
//  The values can be of any datatypes

// Creating arrays

// 1. Array constructor
const students = new Array("Leslie", "Wambui", "Mwangi");

console.log(students);

console.log(students.length);

// Square brackets
const cars = ["Audi", "Mercedes", "BMW"];

console.log(cars);

// Index - position of an element/ value in an array
// ! The index always starts at 0
// We can use the index to access elements inside an array
console.log(cars[0]);

console.log(cars[1]);

console.log(cars[2]);

console.log(students[0]);

console.log(cars[1]);

cars[2] = "Porche";

cars[3] = "Tesla";

cars[5] = "Ferari";

console.log(cars);

console.log(cars.length);

// Arrays methods - allows us to manipulate arrays
const colors = ["magenta", "purple"];

/**
 * Adding  elements
 */
// 1. .push() - add one or more elements at the end of an array
colors.push("blue", "violet");
console.log(colors);

// 2. unshift() - add one or more elements at the beggining of an array
colors.unshift("red", "yellow");
console.log(colors);

/**
 * Removing elements
 */

// 1. pop() - removes the elements at the end of an array
const deletedColor = colors.pop();

console.log(deletedColor);

console.log(colors);

// 2. shift - removes the elements at the beggining of an array
colors.shift();
colors.shift();
colors.shift();

const delColor = colors.shift();
console.log(delColor);
console.log(colors);

/**
 * Slice() - nondestructive (doesn't mutate the original array)
 *
 * can make a copy of the original array
 * delete elements in ana array
 */

const pupils = ["Luciannah", "Phoi", "Mwangi"];

// 1.1 Make a copy of students
// ! as long as no arguments are passed, slice will always make a copy
const copyOfpupils = pupils.slice();
console.log(copyOfpupils);

// spread operator - makes a copy too [...]
const secondCopy = [...pupils];
console.log(secondCopy);

// 2. Deleting values
const deletedPupils = pupils.slice(1, 3);
console.log(deletedPupils);
console.log(pupils);

/**
 * splice() - destructive (mutates the original array)
 *
 * Delete elements
 * Add new elements
 * Update elements
 */

// 1. Delete elements
const days = ["Mon", "Tue", "Wed", "Thur", "Fri"];
console.log(days);

const deleteDays = days.splice(0, 2);

console.log(deleteDays);

console.log(days);

// 2. Adding elements (one or more)
// ! The second argument should always be '0'
days.splice(0, 0, "Mon", "Tue");
days.splice(5, 0, "Sat");
days.splice(days.length, 0, "Sat", "Sun");

console.log(days.length);
console.log(days);

// 3. Updating
days.splice(0, 1, "Monday");
days.splice(2, 1, "Wednesday");

console.log(days);

// Arrays iteration
/**
 * iteration - run statements once for each element
 *
 * looping - run statements repetitively until a certain condition in met
 */

//when using const, we cannot reinitialize the same variable twice
// for string interpolation always use backticks (``)

let count = 0;
const scores = [34, 45, 53, 32, 54];
console.log(scores.length);

while (count < 5) {
  console.log(scores[count]);
  count++;
}
console.log(count);

for (let i = 0; i < scores.length; i++) {
  // console.log(i);
  // const score = scores[i]
  console.log(scores[i]);
}

// for ... of (iterate through an array and even strings)
for (const score of scores) {
  console.log(score);
}
for (const letter of 'code') {
    console.log(letter);
}

// object iteration using for...in
const person = {
    firstName: 'Leslie',
    lastName: 'Mwangi'
}
for (const iterator in person) {
   console.log(iterator);
   console.log(person[iterator]);
}