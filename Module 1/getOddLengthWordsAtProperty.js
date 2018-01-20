/*
Write a function called "getOddLengthWordsAtProperty".

Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd length elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
*/

function isOdd(num) { 
  return num % 2;
}

function getOddLengthWordsAtProperty(obj, key) {
    var arr = [];

    if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0) {
        for (var elem in obj[key]) {
            if (obj[key][elem].length % 2 !== 0) {
                arr.push(obj[key][elem]);
            }
        }
    }

    return arr;
}

