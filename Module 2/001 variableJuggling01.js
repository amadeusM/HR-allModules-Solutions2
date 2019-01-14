// DO NOT ADJUST

var x = 7;
var y = 8;
var z = 9;

x = y + z; // 7 + 9 = 16; x = 16
z = x; // z = x = 16;
x = y; // x = 8, z = 16;
z = x + y; // x = 8, y = 8; z = 16
y = z - x; // z = 16, x = 8; y = 8;
z = y; // z = 8, y = 8;
x = y * z; // y = 8, z = 8, x = 64;
z = y / z; // y = 8, z = 8; z = 1; 
x = (z - x) / (y + z); // (1 - 64) / (8 + 1) = -7

/////////////////

var answer = {
  finalValueOfX: -7 // CHANGE 'null' to correct answer
};
  
// Tracing problem in a sense, the finalValueOfX was equal to null
