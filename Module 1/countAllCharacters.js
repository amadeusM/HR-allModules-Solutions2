/*
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
*/
function countCharacter(str, char) {
  var count = 0;
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

function countAllCharacters(str) {
  if(str.length === 0) {
    return {};
  }
  var obj= {};
  for(var i = 0; i < str.length; i++) {
    var count = countCharacter(str, str.charAt(i)); 
    obj[str.charAt(i)] = count;
  }
  return obj;
}

