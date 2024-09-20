const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(string) {
  const letterCount = {};
  for (const letter of string) {
    if (letterCount !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

const result1 = countLetters("LHL");
console.log(result1);

const result2 = countLetters("lighthouse");
console.log(result2);


//use for...of loop with string
//function should take in a sentence as a string, and then return a count of each of the letters in that sentence
//need it to report back multiple numbers

//declare function that takes a single argument
//initialize an empty object to hold letter count
//use for of loop to iterate over each character in the string
//each character temporarily stored in another variable
//first if statement to skip spaces
// count the letters
//return results
//add tests