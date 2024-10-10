//assertArraysEqual function
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

//eqArrays function
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

const flatten = function(array) {
  let flatArray = [];
  for (const item of array) {
    if (Array.isArray(item)) { //loop through array and check if array
      for (const innerItem of item) { //if it is check inside for array
        flatArray.push(innerItem); //push inner array to new variable flat array
      }
    } else {
      flatArray.push(item); // if its not nested push it to flat array
    }
  }
  return flatArray;
};

module.exports = flatten;
//Function takes array that could be nested and returns one new array