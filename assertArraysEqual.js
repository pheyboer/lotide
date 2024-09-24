const eqArrays = require("./eqArrays"); //eqArrays required

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
//function compares 2 arrays and prints whether they are equal
module.exports = assertArraysEqual;