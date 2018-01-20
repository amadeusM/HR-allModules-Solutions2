/*
Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (60  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
* If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
* There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(score) {
   if ( score > 100 || score < 0 ) {
    return 'INVALID SCORE';
  }
  
  if ( score >= 90 ) {
    if ( score <= 92 ) {
      return 'A-';
    } else if ( score >= 98 ) {
      return 'A+';
    } else { 
      return 'A';
    }
  } else if ( score >= 80 ) {
      if ( score <= 82 ) {
        return 'B-';
      } else if ( score >= 88 ) {
        return 'B+';
      } else { 
        return 'B';
      }
  } else if ( score >= 70 ) {
      if ( score <= 72 ) {
        return 'C-';
      } else if ( score >= 78 ) {
        return 'C+';
      } else { 
        return 'C';
      }
  } else if ( score >= 60 ) {
      if ( score <= 62 ) {
        return 'D-';
      } else if ( score >= 68 ) {
        return 'D+';
      } else { 
        return 'D';
      }
  } else {
      return 'F';
  }
}

