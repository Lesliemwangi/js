/**
 * Data structures
 *
 * Allows us to represent other forms of data
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

cars[2] = "Porsche";

cars[3] = "Tesla";

cars[5] = "Ferrari";

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

// 2. unshift() - add one or more elements at the beginning of an array
colors.unshift("red", "yellow");
console.log(colors);

/**
 * Removing elements
 */

// 1. pop() - removes the elements at the end of an array
const deletedColor = colors.pop();

console.log(deletedColor);

console.log(colors);

// 2. shift - removes the elements at the beginning of an array
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
const scores = [34, 45, 53, 32, 54, 67];
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

for (const letter of "code") {
  console.log(letter);
}

for (const letter in "code") {
  console.log(letter);
}

// const str = 'code'
// console.log(str[o]);
// console.log(str.charAt(0));

// for (const letter in str) {
//     console.log(letter);
//     console.log(str[letter]);
//     console.log(str.charAt(letter));
// }

// object iteration using for...in
const person = {
  firstName: "Leslie",
  lastName: "Mwangi",
  age: 34,
};

const key = "age";

console.log(person["age"]);

for (const key in person) {
  console.log(key);
  console.log(person[key]);
}

// Array iteration methods
const copyOfScores = [...scores];
const dayss = ["Mon", "Tue", "Wed", "Thur", "Fri"];

console.log(copyOfScores);
// 1. indexOf() - It finds the position of a given element and returns the index
// or returns -1 if the element is not found
console.log(copyOfScores.indexOf(25));
const indexOfWednesday = dayss.indexOf("Wed");
console.log(indexOfWednesday);

// 2. find() - returns the first element in an array that meets a certain condition
const score = scores.find(function (score) {
  console.log(score);
  if (score > 50) {
    return score;
  }
});

const anotherScore = scores.find((score) => score > 30);
console.log(anotherScore);

function filter(num) {
  if (num > 60) {
    return num;
  }
}

const scoreGreaterThan60 = scores.find(filter);

console.log(scoreGreaterThan60);

//  3. filter() - finds and returns a list of elements that meet a certain condition
const scoresOver50 = scores.filter((score) => score > 50);

const student = [
  { firstName: "Natasha", score: 50 },
  { firstName: "Wambui", score: 65 },
  { firstName: "Karen", score: 56 },
  { firstName: "Leslie", score: 76 },
  { firstName: "Lynn", score: 45 },
];

const studentsAbove55 = students.filter((student) => student['score'] > 55);

const studentAbove55 = students.find((student) => student['score'] > 55);

console.log(studentAbove55);

console.log(students.length);

console.log(studentsAbove55);

console.log(scores);
console.log(scoresOver50);

// 4. map() -iterates through the whole array modifying each element and 
// returns the modified array
const modifiedScores = scores.map((score) => score + 2)
// const modifiedStudents = students.map((student) => ({ 
//     ...student,
//     firstName: student.firstName.toUpperCase(),
// }))

// console.log(modifiedStudents);
console.log(modifiedScores);
console.log(scores);

// 5. reduce() - create a summary or aggregation  of values in an array
const sum = scores.reduce((prevValue, currValue) => {
  console.log(prevValue);
  console.log(currValue);
  return prevValue + currValue
}, 0)

console.log(sum);

// 6. forEach
scores.forEach((score,index) => {
  console.log(score);
  console.log(index);
})
