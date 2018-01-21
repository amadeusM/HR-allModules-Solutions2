// BEGIN ORIGINAL CODE -- DO NOT MODIFIY THIS CODE

var x = [1, 2, 3];
var y = [4, 5, 6];
var z = x;

// The comments in the following part are mine to trace the juggling of the variables.

z[2] = y[0]; // z = [1, 2, 3], z[2] = 3, z[2] = y[0], y[0] = 4; z[2] = 4; >> z = [1, 2, 4]
z[1] = y[2]; // z = [1, 2, 3], z[1] = 2, z[1] = y[2]. y[2] = 6; z[1] = 6; >> z = [1, 6, 4]
y[1] = z[1]; // y = [4, 5, 6], y[1] = 5, y[1] = z[1], z[1] = 6; y[1] = 6; >> y = [4, 6, 6] 
x[0] = y[0]; // x = [1, 2, 3], x[0] = 1, x[0] = y[0], y[0] = 4; x[0] = 4; >> x = [4, 2, 3]
x[2] = 1;    // x = [4, 2, 3], x[2] = 3, x[2] = 1, 1 = 1; x[2] = 1; >> x = [4, 6, 1]

// END ORIGINAL CODE

/*
What is the final value of x?

IMPORTANT: DO NOT just rewrite this code and run it in a terminal.

There is ZERO POINT to that, you'd just be cheating yourself.

Having the computer keep track of the variable assignments for you does not help you learn!!!
*/

var answer = {
  finalValueOfX: [4, 6, 1], // FILL THIS IN
  finalValueOfY: [4, 6, 6], // FILL THIS IN
  finalValueOfZ: [4, 6, 1], // FILL THIS IN
};
// x = [4, 6, 1] & y = [4, 6, 6] & z = [4, 6, 1]


// Tracing problem in a sense, the finalValueOfX, finalValueOfY, finalValueOfZ were equal to null


