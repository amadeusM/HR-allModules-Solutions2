/*
Instructions from your teacher:
Ok by now you know the drill on how to set up and do these videos, so we won't repeat the giant list of instructions.

Give yourself 20 minutes for this problem.  

Don't be too fancy. Just lay out enough plan to get your ideas down, then assemble your solution, step by step.

Note: Don't submit code that doesn't reflect what you did in the allotted time.  You can put a belatedly-complete solution in a *private* Github Gist instead and link to that if you really want to share it here.

Starter Code :
/*
Problem description (de-obfuscate with ROT-13 as usual).

Tvira n yvfg bs aba-artngvir vagrtref naq n gnetrg fhz, svaq n cnve bs ahzoref gung fhzf gb gur gnetrg fhz.

Rknzcyr:

ine cnve = svaqCnveSbeFhz([3, 34, 4, 12, 5, 2], 9);
pbafbyr.ybt(cnve); // --> [4, 5]
*/

// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

function findPairForSum(array, target) { 
    var arr = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i] > target) {
            continue;
        } else {
            arr.push(array[i]);
        }
    }
    var result = [];
    for(var j = 0; j < arr.length; j++) {
        var temp = arr[j];
        for(var k = j; k < arr.length; k++) {
            var temp1 = arr[k];
            if(temp + temp1 === target) {
                result.push(temp);
                result.push(temp1);
                return result;
            }
        }
    }
    result.push(-1);
    result.push(-1);
    return result;
}
  
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
       console.log("Test [" + testName + "] passed.");
    } else {
      console.log("FAILED ["+ testName +"] Expected " + '"' + expected + '"' + ", but got " + '"' + actual + '"' );
  }
}


var input = [3, 34, 1, 12, 5, 3];
var target = 9;
var actual = findPairForSum(input, target);
var expected = [-1, -1];

assertArraysEqual(actual, expected, "Failing the test");

var input = [3, 34, 4, 12, 5, 3];
var target = 9;
var actual = findPairForSum(input, target);
var expected = [4, 5];

assertArraysEqual(actual, expected, "any pair");

var input = [3, 34, 6, 12, 5, 4];
var target = 9;
var actual = findPairForSum(input, target);
var expected = [3, 6];

assertArraysEqual(actual, expected, "First pair only");