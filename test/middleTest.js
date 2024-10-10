const assert = require('chai').assert;
const middle = require("../middle");

describe("middle", () => {
  it("should return empty array when given array less than 3 elements", () => {
    assert.deepEqual(middle([1]), []); //check for 1 element
    assert.deepEqual(middle([1, 2]), []); //check for 2 elements
  });

  it("should return middle element for array of odd length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); //two odd length array checks
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return middle two elements for array with even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); //two even length array checks
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});