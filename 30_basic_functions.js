// Practice what you have learned with these exercises. 
// Use console.log() to check your work for each problem.

// ******* console.log vs return *******

// 1. Write 2 functions.  Both should accept a string as a parameter.  In the first, return the string.
// In the second, console.log the string.  What do you see in the console when you invoke each one?
// Can you use a variable to catch the return value from the first function?

// Remember to look at documentation and ask your partners when you get stuck

var add = function(a, b) {
    return a + b;
}

var result = add(3,4);
console.log('The result of add is: ', result);


// Use the example above to write your own functions to solve common math problems

// subtract

// multiply

// divide

// area of rectangle

// your turn!  Think of more functions on your own.

var greeting = function(name) {
    console.log('Hello ', name);
}

greeting('JavaScript');
greeting('Rachel');
greeting('Santa Claus');

// ******* Basic Functions *******

var counter = 0;
// 1. Write a function that will add 5 to the counter value each time you invoke it.

// 2. Write a function that will divide the counter value by 3 and return the remainder.

// 3. Write a function that will print 'ODD' or 'EVEN' based on the counter value.
