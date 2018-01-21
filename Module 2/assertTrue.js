/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. 

Write and test a function that determines whether a string is an isogram. 

Notes:
* Assume your input is only letters.
* Assume the empty string is an isogram. 
* Ignore case.
* Follow the pseudocode exactly!

*/
function hasDuplicates(text, char, index) {
  for (var i = index + 1; i < text.length; i++) {
    if (char === text.charAt(i)) {
      return true;
    }
  }
  return false;
}

// add each char to a set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// note: a set drops dup values
// thus, to see if all the chars were unique,
// check length of text and the size of the set
function isIsogram(text) {
  var textLength = text.length;
  if (textLength === 0) {
    return true;
  }
  var arr = [];
  for(var i = 0; i < textLength; i++){
    var char = text.charAt(i);
    var hasDups = hasDuplicates(text, char, i);
    if (!hasDups) {
      arr.push(char);
    }
  }
  if (arr.length === textLength) {
    return true;
  } else {
    return false;
  }
}

function assertTrue(actual, testName) {
  if(actual) {
    console.log("Test Name: ["+ testName +"] Test Status: [Test passed]");
  } else {
    console.log("Test Name: ["+ testName +"] Test Status: [Test failed]");
  }
}

assertTrue(isIsogram("Sheikh"), "Isogram?");
assertTrue(isIsogram("Eman"), "Isogram?");
assertTrue(isIsogram(""), "Isogram?");