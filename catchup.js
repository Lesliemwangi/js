// Selection using if
// if only tells the true part
// else tells the false part
// strict - returns values that are not equal without performing conversion
const eatUgali = false;
if (eatUgali) {
  console.log("can sleep");
} else {
  console.log("cannot sleep");
}

console.log("code continues execution");

// student grader
function studentGrader(score) {
  let grade = " ";

  if (score > 100 || score < 0) {
    grade = "Invalid input";
  } else if (score > 79) {
    grade = "A";
  } else if (score >= 60 && score <= 79) {
    grade = "B";
  } else if (score >= 49 && score <= 59) {
    grade = "C";
  } else if (score >= 40 && score < 49) {
    grade = "D";
  } else {
    grade = "E";
  }

  return grade;
}
console.log(studentGrader(109));
console.log(studentGrader(90));

// Repetition

// first class functions - JS treats functions like any other value
// const school = "Moringa"
// function print(name) {
//     console.log(name);
// }

function log() {
    console.log('Transform');
}
function print(blair) {
    console.log(typeof blair);
    blair()
}
// print ('collins')
print(log)

function print(name) {
    console.log(typeof name);
    console.log(name);
    name("Grow")
    // if (typeof blair === 'function') {
    //     blair()
    // }
}
// print ('collins')
// print(23)
print(log)