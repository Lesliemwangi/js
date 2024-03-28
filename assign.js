// function isItLetter(letter) {
//     let letters = letter
//     let letter = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z']
//     console.log(isItLetter);
//     if ('L') {
//         return is_it_letter
//     } else if ('L') {
//         return is_it_letter
//     }
// }
// isItLetter(L)

// use of regexr to make a range
function isItLetter(character) {
  return /[a-zA-Z]/.test(character);
}
console.log(isItLetter(0));

console.log(/^[a-zA-Z]$/.test("u"));
