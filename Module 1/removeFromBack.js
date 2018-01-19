/*
Write a function called "removeFromBack".

Given an array, "removeFromBack" returns the given array with its last element removed.

Notes:
* You should be familiar with the method 'pop'.

var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
*/

function removeFromBack(arr) {
  return arr.splice(0, arr.length - 1, arr.length - 1);
}

