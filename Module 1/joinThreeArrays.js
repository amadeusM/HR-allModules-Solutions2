/*
Write a function called "joinThreeArrays".

Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]

You should be familiar with the "concat" method for this problem.
*/

function joinThreeArrays(arr1, arr2, arr3) {
  for(var i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  for(var i = 0; i < arr3.length; i++) {
    arr1.push(arr3[i]);
  }
  return arr1;
}

