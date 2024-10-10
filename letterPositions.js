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



const letterPositions = function(sentence) {
  const results = {};
  //iterate over the sentence
  for (let i = 0; i < sentence.length; i++) {
    //skip spaces
    const letter = sentence[i];
    if (letter !== " ") {
      // if letter reappears - update the existing array, add new index to the array
      if (letter in results) {
        results[letter].push(i);
      } else {
        // if letter is new to the result object add new key - and add index to array value
        results[letter] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
// Function creates an object that maps each letter in a sentence to an array of its indices