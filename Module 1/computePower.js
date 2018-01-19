/*
Write a function called "computePower".
Given a number and an exponent, "computePower" returns the given number, raised to the given exponent. 
var output = computePower(2, 3);
console.log(output); // --> 8
*/

function computePower(num, exponent) {
  var res = 1;
  for(var i = 1; i <= exponent; i++) {
    res = res * num; 
  }
  return res;
}