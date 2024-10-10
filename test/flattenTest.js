const assert = require('chai').assert;
const flatten = require("../flatten");

describe('#flatten', () => {
  it("should return an empty array when given an empty array", () => {
    assert.deepEqual(flatten([]), []);
  });

  it("should return same array if no nested array present", () => {
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });

  it("should flatten an array with nested arrays", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});