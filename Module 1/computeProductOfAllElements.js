/*
Write a function called "computeProductOfAllElements".

Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

Notes:
* If given array is empty, it should return 0.

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
*/

function computeProductOfAllElements(arr) {
  if(arr.length === 0) {
    return 0;
  }
  var product = 1;
  for(var el in arr) {
    product *= arr[el];
  }
  return product;
}

