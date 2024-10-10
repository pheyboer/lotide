const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe('#eqArrays', () => {
  it("should return true for arrays that are the same", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return false for arrays of different lengths", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2,]), false);
  });

  it("should return false for arrays out of order", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("should return true for arrays that have identical strings", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("should return false for arrays with mixed types", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});