// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const assertEqual = require('./assertEqual');

const tail = function(arr) {
  return arr.slice(1);
};



module.exports = tail;

