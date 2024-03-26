/**
 * OBJECTS - Collection of data consisting of key value pairs(properties),
 * separated by a comma {}
 */

const firstName = "John";
const lastName = "Doe";

const person = {
  firstName: "John",
  lastName: "Doe",
//   unconventional keys
  ['full name']: 'John Doe',
  age: 30,
  address: {
    county: "Nairobi",
    subCounty: "Kinoo",
    postalCode: 2000,
  },
  children: ["Jane", {fullName: 'Luciannah Phoi', age: 19}],
};

// Accessing values inside an object
// 1. Dot notation .
// console.log(person.age);
// console.log(person.firstName);
// console.log(person.address.subCounty);
// console.log(person.children[1].fullName);
// console.log(person.children[1].age);

// 2. Square bracket notation []
console.log(person['age']);
console.log(person['full name']);
console.log(person['lastName']);
console.log(person.address['county']);
console.log(person['address']['postalCode']);

// Adding properties
person.birthday = 1994;
person['job'] = 'Software Engineer';

console.log(person);
console.log(person.job);

// update properties
person.firstName = 'Winnie'
person['full name'] = 'Winnie Doe'
console.log(person);

// Deleting properties
delete person.job;
delete person["full name"]
console.log(person);
