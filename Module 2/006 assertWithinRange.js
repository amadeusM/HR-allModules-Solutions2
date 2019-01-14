/*
Write an "assertWithinRange" function from scratch.

The idea here is similar to when someone says, "Give me a number between 1 and 5". 
You usually think the possible answers are "1, 2, 3, 4, or 5".  I.e., you usually don't interpret the options as being "2, 3, or 4".  

Notes:
* Assume that the "actual" and "expected" arguments are always numbers (e.g., not booleans or other types that don't make sense in the context of examining a "range".)

Examples

SUCCESS CASE IN ACTUAL USE

var blackjackScore = 20;
assertWithinRange(4, 21, blackjackScore, 'blackjack score should be between 4 and 21');
// console output:
// passed

SUCCESS CASE IN ACTUAL USE

var dieRoll = 1;
assertWithinRange(1, 6, dieRoll, 'die roll should be between 1 and 6');
// console output:
// passed

FAILURE CASE IN ACTUAL USE

var price = 101;
assertWithinRange(1, 100, price, 'price should be between 1 and 100');
// console output:
// FAIL [price should be between 1 and 100] "101" not within range 1 to 100

*/

function assertWithinRange(low, high, actual, testName) {
  if(low <= actual && actual < high) {
    console.log("passed");
  } else {
    console.log("FAIL [" + testName + "] " + '"' + actual + '"' + " not within range " + low + " to " + high)
  }
}



