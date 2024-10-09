//function returns the middle element of an array
const middle = function(array) {
  const length = array.length;
  if (length < 3) {
    return [];
  }
  if (length % 2 !== 0) {
    const middleIndex = Math.floor(length / 2);
    return [array[middleIndex]];
  } else {
    const middleIndex1 = (length / 2) - 1;
    const middleIndex2 = length / 2;
    return [array[middleIndex1], array[middleIndex2]];
    
  }
};
//first check if array is less than 3 elements
  // cant be a middle
//check if the length of array is odd, then calculate middle
//lastly check if array is even by calculating middle indicies, returns array with both middle elements
module.exports = middle;