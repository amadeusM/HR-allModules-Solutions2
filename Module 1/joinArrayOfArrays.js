/*
Write a function called "joinArrayOfArrays".

Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

You should be familiar with the "concat" method for this problem.
*/

function joinArrayOfArrays(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    var array = arr[i];
    for(var j = 0; j < array.length; j++) {
      newArr.push(array[j]);
    }
  }
  return newArr;
}

