
// split - converts string into Array
// => 
// map - alterates through an array and modify it to return new values(callback function{.map})
// join converts an array to joint

function capitalizeFirstLetter(str) {
    if (str.length > 0) {
        return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    } else {
        return str;
    }
}

console.log(capitalizeFirstLetter('leslie mwangi'));



const str = "leslie mwangi";
const modStr = str[0].toUpperCase() + str.slice(1);
console.log(str); // name
console.log(modStr); // Name



	





function capitalizeFirstLetterEachWord(str) {
    // Split the string into an array of words
    var words = str.split("leslie mwangi");

// Iterate through each word
for (var i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

// Join the words back into a string and return it
return words.join(" ");
}
