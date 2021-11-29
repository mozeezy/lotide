// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);

// assertEqual(words.length, 3);

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it ("should return 3 for array length (arr.length)" , () => {
    assert.strictEqual((words.length), 3);
  });
  it ("should ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
})