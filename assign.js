// Trial 1
function isItLetter(letter) {
    if(['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 
    'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 
    'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'].includes(letter)) {
        return 'A letter';
    } else {
        return 'Not a letter'
    }
}
console.log(isItLetter('0'))

// Trial 2
// use of regexr to make a range
function isItLetter(character) {
  return /[a-zA-Z]/.test(character);
}
console.log(isItLetter('9y'));

// Trial 3
console.log(/^[a-zA-Z]$/.test("5u"));

// Trial 4


// Code- challenge
// QUESTION 1
/* Write a function that accepts a string as input and swaps the case of each character. 
 For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/

// Trial 1
function caseChange(phrase) {
  return phrase
    .split("")
    .map((term) => {
      if (term === term.toUpperCase()) {
        return term.toLowerCase();
      } else if (term === term.toLowerCase()) {
        return term.toUpperCase();
      } else {
        return term;
      }
    })
    .join("");
}
console.log(caseChange("The Quick Brown Fox "));

// Trial 2
function changeCase(sentence) {
  let letters = sentence.split("");
  let array = [""];
  for (let letter of letters) {
    if (letter === letter.toUpperCase()) {
      array.push(letter.toLowerCase());
    } else {
      array.push(letter.toUpperCase());
    }
  }
  return array.join("");
}

console.log(changeCase("The Quick Brown Fox"));


// QUESTION 2
/* Write a JavaScript function that accepts two numbers to generate an array between them. 
For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 
should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]. */

// Trial 1
const myArray = (beginning, end) => {
  return beginning.concat(end);
};

console.log(myArray([4, 5, 6], [7]));
console.log(myArray ([-4, -3, -2, -1, 0, 1, 2, 3, 4], [5, 6, 7]));

// Trial 2
function numberRange(firstnum, lastnum) {
  if (firstnum - lastnum == 0) {
    return [firstnum];
  } else {
    let num = numberRange(firstnum, lastnum - 1);
    num.push(lastnum);
    return num;
  }
}

console.log(numberRange(4, 7));
console.log(numberRange(-4, 7));


// QUESTION 3
/* You are tasked with writing a function that takes an array of numbers as input 
and returns a new array containing only the prime numbers from the original array. 
How would you implement this function efficiently, ensuring that it accurately identifies prime numbers 
and returns them in the same order they appear in the input array?
For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7]. */

// Trial 1

function primeNumbers(beginning, end) {
  let prime = [];
  for (let i = beginning; i <= end; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumbers(2, 5));
console.log(primeNumbers(1, 10));
console.log(primeNumbers(11, 20));

// Trial 2
function getPrimesUpTo(max) {
  const primes = [];
  for (let num = 2; num <= max; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
}
const maxNumber = 20;
const primeNumber = getPrimesUpTo(maxNumber);
console.log(`Prime numbers up to ${maxNumber}: ${primeNumber}`);

