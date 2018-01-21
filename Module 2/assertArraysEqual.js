/*
Write an "assertArraysEqual" function from scratch.

Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).

Do not use JSON.stringify(), Array.join(), or any other "convert the array to a string so I can compare two strings" type of technique to implement this.

Examples

SUCCESS CASE

var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed

FAILURE CASE

var expected = [1, 1, 2, 3, 5, 8, 13];
var actual = generateFirstNFibonaccis(7); //just an example
assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"

*/

function checkArraysIfEqual(actual, expected) {
  if(actual.length !== expected.length) {
      return false;
    } else {
      for(var i = 0; i < actual.length; i++) {
        if(actual[i] !== expected[i]) {
          return false;
        }
      }
      return true;
    }
}

function assertArraysEqual(actual, expected, testName) {
    var areEqualArrays = checkArraysIfEqual(actual, expected);
    if(areEqualArrays) {
       console.log("passed");
    } else {
      console.log("FAILED ["+ testName +"] Expected " + '"' + expected + '"' + ", but got " + '"' + actual + '"' );
  }
}







