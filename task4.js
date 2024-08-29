/*

Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var b = isNaN(2-10);

Explain your answers.

*/


// var a is not NaN. Cause it is a string which can be converted into a number. if it could not be converted into a number then it would be NaN.


// var b is not NaN. Cause it is a number as it is not a string. Does not matter if it is a negative number.

var a = isNaN('11');

var b = isNaN(2-10);

console.log(a);
console.log(b);

// both returned false as both are numbers.