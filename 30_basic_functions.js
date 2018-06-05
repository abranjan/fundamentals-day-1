// Remember to look at documentation and ask your partners when you get stuck
// Simple math functions

const add = function(a, b) {
    return a + b;
};

let result = add(3,4);
console.log('The result of add is: ', result);


// Use the example above to write your own functions to solve common math problems

// subtract

// multiply

// divide

// area of rectangle

// your turn!  Think of more functions on your own.



const sub = function(a,b){
    return a-b;
}

result = sub(5,2);
console.log('The result of sub is: ', result);

const multiply = function(a,b){
    return a*b;
}

result = multiply(5,2);
console.log('The result of product is: ', result);

const div = function(a,b){
    return a/b;
}

result = div(10,2);
console.log('The result of division is: ', result);




// Functions with strings

// Write a function that accepts a name and prints "Hello, name!"

const getName = function(name){
    console.log("Hello,",name);
}

getName('Abhishek');

// Write a function that accepts two strings and prints them together in a sentence.

const concatString = function(first,second){
    console.log(first,second);
}

concatString(`First line`,`Second line`)

/* 
Functions that return a boolean
Write a function that:
1. accepts a number
2. evaluates an expression with that number
3. returns true or false based on the expression
*/

const booleanFunction = function(num){
    if(num>30)
        return true;
    else
        return false;
}
console.log(booleanFunction(6));


let counter = 0;
// 1. Write a function that will add 5 to the counter value each time you invoke it.

const incrementFunction = function(){
    counter+=5;
}

incrementFunction();
incrementFunction();


// 2. Write a function that will divide the counter value by 3 and return the remainder.

const dividerFunction = function(){
    return counter%3;
}

console.log(dividerFunction());

// 3. Write a function that will print the counter value in a sentence.

const printCounter = function(){
    console.log(`Value of counter is`,counter);
}

printCounter();

// 1. Write 2 functions.  Both should accept a string as a parameter.  In the first, return the string.
// In the second, console.log the string.  What do you see in the console when you invoke each one?
// Can you use a variable to catch the return value from the first function?

const firstFunction = function(String1){
    return String1;
}

const secondFunction = function(String2){
     console.log(String2);
}

secondFunction(firstFunction(`Line 1`));
