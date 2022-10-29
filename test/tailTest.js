const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return last array in index", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
});