// Expressions
// * Operators
// * Types: boolean, number, string
// * Statements
// * Constants
// * Variables
// * console.log()
// * Conditionals
// * Functions
// * Scopes
// * Loops

// Expressions & comparison operators
console.log(1 === 1);
console.log(1 === 2);
console.log(1 < 2);
console.log(1 > 2);
console.log(1 <= 2);
console.log(1 >= 2);


// Boolean types
console.log(true);
console.log(false);

// Numeric types
console.log(1);
console.log(2);
console.log(3);
console.log(3.14);

// String types
console.log('testing');


// constants
const PI = 3.14;
const g = 9.8;
const x = 3 + 7;
console.log(x);

// functions
function sq(num) {
  return num * num;
}

function squareArea(side) {
  return side * side;
}

function rectArea(w, h) {
  return w * h;
}

function circleArea(radius) {
  return PI * sq(radius); // functions can call functions
}

// Conditionals
function min(a, b) {
  if(a < b) {
    return a;
  } else {
    return b;
  }
}

function max(a, b) {
  if(a > b) {
    return a;
  } else {
    return b;
  }
}
