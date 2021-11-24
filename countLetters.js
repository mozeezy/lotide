const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// countLetters function - create a function that takes in a string and returns a count of each letter in that string.
const countLetters = function (string) {
// initializing an empty object  
  const result = {};
// using for..of to iterate through the 'string' input. each iteration is stored in the 'letter' variable. 
  for (let letter of string) {
    // if each iteration in the 'letter' variable DOES NOT have any spaces.
    if (letter !== " ") {
      // if the letter has been added to the result object, add 1.
      if  (result[letter]) {
        result[letter] += 1;
      // if not, then add it.
      } else {
        result[letter] = 1;
        
      } 
    }
  }
  return result
};

