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

//flatten function
//loop through outer array
//loop through inner array
const flatten = function(array) {
  let flatArray = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (const innerItem of item) {
        flatArray.push(innerItem);
      }
    } else {
      flatArray.push(item);
    }
  }
  return flatArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);