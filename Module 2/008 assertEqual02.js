/*

Write an "assertEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test the code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/

// Note: This is a simple (almost correct) implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every


// Your assertion function:
function assertEqual(actual, expected, testName) {
  if(actual === expected) {
    console.log("Passed");
  } else {
    console.log("Test Failed...");
  }
}

// Code under test:
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  array.forEach(function(element) {
    doesEveryElementMatch = callbackFunction(element);
  });
  return doesEveryElementMatch;
}
// NOTE - every makes use of a callbackFunction. In orde to test it properly, you will need to write one. 
function match(array){
  var start = array[0];
  var count = 0;
  for (var i = 1; i < array.length; i ++ ) {
    if (array[i] === start) {
      count++;
    }
    start = array[i];
  } 
  if (count + 1 === array.length) {
    return every(array, function(element){ 
      return true;
    });
  } else {
    return false;
  }
}
  
// Calls to 'assertEqual':
