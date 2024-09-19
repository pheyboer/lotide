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

  const middle = function(array) {
    const length = array.length;
    if (length < 3) {
      return [];
    }
    if (length % 2 !== 0) {
      const middleIndex = Math.floor(length / 2);
      return [array[middleIndex]];
    }
    if (length % 2 === 0) {
      const middleIndex1 = (length / 2) -1;
      const middleIndex2 = length / 2;
      return [array[middleIndex1], array[middleIndex2]];
    }
  }

const arrayLessThanThree = [1, 2];
  middle(arrayLessThanThree);
  assertArraysEqual(middle(arrayLessThanThree), []);

const evenArray = [1, 2, 3, 4];
  middle(evenArray);
  assertArraysEqual(middle(evenArray), [2, 3]);

const oddArray =  [1, 2, 3, 4, 5];
  middle(oddArray);
  assertArraysEqual(middle(oddArray), [3]);


