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

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);

//implement function letterPositions
//define object structure to return
//letterPositions will return all the indices in the string where each character is found - counting letter positions
//results in an object that maps each letter in the string to an array of its indices
//write a test with a small string "hello" -
//we want to see the string hello laid out telling us at which index each letter is
//return object keys are letters.
//values are indices
/*
{
  h: [0],
  e: [1],
  l: [2, 3]
  o: [4]
}
*/

//iterate over the sentence
//skip spaces
//update the results object


