// // assertEqual function
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // assertEqual TESTS
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// // eqArrays function
// const eqArrays = function(arr1, arr2) {
//   let correct = true;

  
//   if (arr1.length !== arr2.length) {
//     return false
//   } 

//   for (let i = 0; i < arr1.length; i ++) {
//     if (arr1[i] !== arr2[i]) {
//       correct = false;
//     }
//   }

//   return correct;

// }
// // eqArrays TESTS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true);

// // assertArraysEqual function
// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays (arr1, arr2)) {
//     console.log (`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log (`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`)
//   }
// };

// // assertArraysEqual TESTS
// assertArraysEqual([4, 5, 6], [4, 5, 6]);
// assertArraysEqual([4, 5, 6], [4, 5, '6']);

const assertArraysEqual = require('./assertArraysEqual');

// without Function
const without = function (arr1, arr2) {
  let newArr = [];
  for (const element of arr1) {
    if (arr1[element] != arr2[0]) {
      newArr.push (arr1[element])
    }
  } return newArr
};

// without Function TESTS

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;