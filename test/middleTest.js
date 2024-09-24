const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual.js");

const arrayLessThanThree = [1, 2];
assertArraysEqual(middle(arrayLessThanThree), []);

const evenArray = [1, 2, 3, 4];
assertArraysEqual(middle(evenArray), [2, 3]);

const oddArray =  [1, 2, 3, 4, 5];
assertArraysEqual(middle(oddArray), [3]);