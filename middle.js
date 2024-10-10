//Function returns the middle element of an array
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

module.exports = middle;