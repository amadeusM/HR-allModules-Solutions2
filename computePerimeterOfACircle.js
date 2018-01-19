/*
Write a function called "computePerimeterOfACircle".
Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.
var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345
*/

function computePerimeterOfACircle(radius) {
  return 2 * radius * Math.PI;
}