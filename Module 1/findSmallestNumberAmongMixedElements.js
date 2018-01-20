/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/
function findSmallestElement(array){
  if(array.length === 0) {
    return 0;
  }
  return Math.min.apply(null, array);
}
function findSmallestNumberAmongMixedElements(arr) {
  var newArr = [];
  for(var el in arr) {
    if(typeof arr[el] === 'number') {
      newArr.push(arr[el]);
    }
  }
  return findSmallestElement(newArr);
}

