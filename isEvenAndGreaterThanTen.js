/*
Write a function called "isEvenAndGreaterThanTen".
Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.
var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false
*/

function isEvenAndGreaterThanTen(num) {
  return (num > 10 && num % 2 === 0);
}