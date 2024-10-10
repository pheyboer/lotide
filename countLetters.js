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
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};
//Function counts number of times each letter appears in a given string
const result1 = countLetters("LHL");
console.log(result1);

const result2 = countLetters("lighthouse");
console.log(result2);

assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);