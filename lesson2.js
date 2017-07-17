// variables & mutability
var x = 1;
console.log("x=" + x);
x = 2;
console.log("x=" + x);
x = 3;
console.log("x=" + x);

// for loops
for(var i = 0; i < 10; i++) {
  console.log("i=" + i);
}

// arrays
const names = ['alice', 'bob', 'charlie'];

// iterating over array
for(var i = 0; i < names.length; i++) {
  var name = names[i];
  console.log('name=' + name);
}

// in accumulator, set total = 0 inside for loop and predict result