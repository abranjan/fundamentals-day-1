// ******* Operators and Expressions *******

// 1. Declare and assign 6 variables: 2 that are strings, 2 that are numbers, 2 that are booleans.
// Use the variables you declared to write expressions.  Predict what the expression will evaluate to before you try it.
// Ex: var string1 = 'STRING'  var string2 = 'string'  console.log(string1 === string2);  Prediction: false

var string = 'This is a string';
var num = 3;
var numStr = '3';

//This is a comment.  The computer will ignore this line.

console.log(string);

console.log(string.length > 4);

console.log(string.length >= 6);

console.log(num < (3+1));

console.log(num <= 4);

console.log(num == numStr);

console.log(num != numStr);

console.log(num === numStr);

console.log(num !== numStr);


var num6 = 6
// && (logical and), both conditions must evaluate to true for the expression to return true
console.log((string.length == num6) && (num6 > 3));

console.log((string.length == num6) && (string.length != 6));


// || (logical or), at least one condition must evaluate to true to return true
console.log((string.length > 7) || (num6 >= 8));

console.log((string.length < 6) || (num6 >= 2));


// ! (logical not), takes a single Boolean value and inverts it
console.log(!(4 > 9));

console.log(!(string.length == num6));

console.log((1<2) && (3+4 >= 7) || false);

// Play around and create your own expressions for JavaScript to evaluate!  Or edit the ones above to see how they change.
