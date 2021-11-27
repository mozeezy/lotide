const letterPositions = function(sentence) {
// initialize an empty object
  const results = {};
// use a for loop: let iterating variable i = 0. for every iteration less than the length of the sentence array...  
  for (let i = 0; i< sentence.length; i++) {
  // if the sentence doesn't have space then...   
    if (sentence[i] !== " ") {
      // if i is not in results, then push it in.
      results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] =[i];
    }
  }
  
  return results;
};

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

// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays (arr1, arr2)) {
//     console.log (`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log (`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`)
//   }
// };
// -------- TEST ------------

const assertArraysEqual = require('./assertArraysEqual');

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [1]);