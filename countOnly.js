const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


// countOnly function

// Let's work together to implement countOnly. 
// This function should take in a collection of items and return counts for a specific subset of those items. 
// It won't count everything. 
// In order to decide what to count, 
// it will also be given an idea of which items we care about and it will only count those, ignoring the others.
// Items in our case will be limited to Strings.

// countOnly will be given an array and an object. 
// It will return an object containing counts of everything that the input object listed.
// ------------------------  //

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// The function should report back how many instances of each string were found in the allItems array of strings.
// Our function countOnly needs to return a proper report on all the strings found in the input array, and their respective counts. 
// Therefore it will need to return an object that can represent the stats.

 const countOnly = function (allItems, itemsToCount) {
  // initializing an empty object.
  const results = {};
  // using a for... of loop to iterate over the array. each iteration is assigned to the variable 'item'.
    for (const item of allItems) {
      if (itemsToCount[item]) { 
        if (results[item]) {
          results[item] += 1;
        } else {
          results[item] = 1;
        }
      }
    }
    return results;
  }
// ----- TEST ------

// this is an array called "firstNames" with the different names inside it.
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// result1 = countOnly function evaluated with the inputs firstNames and a random object.
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);