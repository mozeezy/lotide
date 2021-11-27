const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
                                // function (x) {return x < 0}
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil;

// ------- TESTS w/ assertArraysEqual function -------

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

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
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true);

// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays (arr1, arr2)) {
//     console.log (`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log (`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`)
//   }
// };

const assertArraysEqual = require('./assertArraysEqual');

assertArraysEqual(takeUntil(data1, x => x<0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data1, x => x<0), [1, 2, 3, 4]);
assertArraysEqual([4, 5, 6], [4, 5, 6]);
assertArraysEqual([4, 5, 6], [4, 5, '6']);


