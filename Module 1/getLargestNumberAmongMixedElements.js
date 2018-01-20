/*
Write a function called "getLargestNumberAmongMixedElements". 

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/


function getLargestNumberAmongMixedElements(arr) {
  if(arr.length === 0) {
    return 0;
  }
  var newArr = [];
  for(var el in arr){
    if(typeof arr[el] === 'number') {
      newArr.push(arr[el]);
    }
  }
  if(newArr.length === 0) {
    return 0;
  }
  return Math.max.apply(0, newArr);
}

