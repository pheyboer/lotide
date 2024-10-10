const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
  
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
//Function returns an array based on results of the callback function

//test cases
//1: first letter of each word

const firstLetters = map(words, (word) => word[0]);
assertArraysEqual(firstLetters, ['g', 'c', 't', 'm', 't']); //expect this output to be true

//2 conversion of each word to upperCase

const uppercaseWords = map(words, (word) => word.toUpperCase());
assertArraysEqual(uppercaseWords, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']); //should test to be true

//3 length of each word

const wordLengths = map(words, (word) => word.length);
assertArraysEqual(wordLengths, [6, 7, 2, 5, 3]);  //should be true

//4 check reverse words

const reversedWords = map(words, (word) => word.split('').reverse().join(''));
assertArraysEqual(reversedWords, ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot']);   //this should be true
