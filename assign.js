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
console.log(isItLetter(0));

// Trial 3
console.log(/^[a-zA-Z]$/.test("u"));

// Trial 4
