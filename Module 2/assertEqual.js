/*
Write an assertEqual function from scratch.

It should compare actual and expected values with strict equality (not typecasting). Use console.log, not return statements; and pay very close attention to the desired messages provided in the examples.

Examples

SUCCESS CASE

function multiplyByTwo(n) {
  return n * 2;
}
var output = multiplyByTwo(2); // returns 4
assertEqual(output, 4, 'it doubles 2 to 4');

// console output:
// passed


FAILURE CASE

function multiplyByTwo(n) {
  return (n * 2) + 1; // an incorrect implementation
}
var output = multiplyByTwo(2); // returns 5
assertEqual(output, 4, 'it doubles 2 to 4');
// console output:
// FAILED [it doubles 2 to 4] Expected "4", but got "5"

*/

function assertEqual(actual, expected, testName) {
  if(actual === expected) {
    console.log("passed");
  } else {
    console.log("FAILED [" + testName + "] Expected " + '"' + expected + '"' + ", but got " + '"' + actual + '"'  )
  }
}




