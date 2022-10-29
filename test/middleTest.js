const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return middle section of array in index", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })
  it("should return middle section of array in index", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  })
  it("should return middle section of array in index", () => {
    assert.deepEqual(middle(["Lighthouse", "Labs", "Bootcamp"]), ["Labs"]);
  })
});