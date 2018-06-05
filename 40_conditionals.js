// Example:
const bigNumber = function (numA, numB) {
    if (numA > numB) {
        console.log('A is big!');
    } else {
        console.log('B is big!');
    }
};

bigNumber(4, 89);

const registerToVote = function (age) {
    if (age >= 18) {
        console.log("You are " + age + ". Have you registerd to vote?");
    } else {
        console.log("You are " + age + ". You are not old enough to vote.");
    }
};

registerToVote(17);
registerToVote(21);


console.log('Task #1: Write a function that takes 2 numbers and returns whichever number is the higher number');
const max = function (num1,num2) {
    if(num1 > num2)
        return num1
    else
        return num2

};

const result = max(1, 2);
console.log('Result #1: ' + result + ' (should be 2)');


console.log('Task #2: Write a function takes a language code ("es", "de", "en") and returns "Hello, World" for the given language');
const translate = function (/* some parameters */) {
    /* solution goes here! */

};

const result1 = translate('en');
const result2 = translate('es');
const result3 = translate('de');
console.log('Result #2: (en) ' + result1 + ' (should be "Hello, world!)');
console.log('Result #2: (es) ' + result2 + ' (should be "¡Hola, Mundo!")');
console.log('Result #2: (de) ' + result3 + ' (should be "Hallo, Welt!")');


console.log('Task #3: Write a function that takes percentile score and returns a grade (A, B, C, D, F)');
const assignGrade = function (/* some parameters */) {
    /* solution goes here! */

};
const resultA = assignGrade(90);
const resultB = assignGrade(80);
const resultC = assignGrade(70);
const resultD = assignGrade(60);
const resultF = assignGrade(50);
console.log('Result #3: (A)' + resultA + ' (should be A)');
console.log('Result #3: (B)' + resultB + ' (should be B)');
console.log('Result #3: (C)' + resultC + ' (should be C)');
console.log('Result #3: (D)' + resultD + ' (should be D)');
console.log('Result #3: (F)' + resultF + ' (should be F)');


// console.log('Task #4: Write a function that takes a noun and a number and returns the number and pluralized form ("5 cats" or "1 dog")');
// var pluralize = function (/* some parameters */) {
//     /* solution goes here! */
//
// }
// var result1 = pluralize(5, 'cat');
// var result2 = pluralize(1, 'dog');
// var result3 = pluralize(3, 'sheep');
// var result4 = pluralize(1, 'sheep');
// var result5 = pluralize(1, 'geese');
// var result6 = pluralize(2, 'geese');
// console.log('Result #4: ' + result1);
// console.log('Result #4: ' + result2);
// console.log('Result #4: ' + result3);
// console.log('Result #4: ' + result4);
// console.log('Result #4: ' + result5);
// console.log('Result #4: ' + result6);

// Lovingly adapted from: https://www.teaching-materials.org/javascript/
// https://creativecommons.org/licenses/by-sa/3.0/


// ******* Conditionals and Loops *******

// 1. Write a function that accepts a number as a parameter and prints a message that depends on the number.
// Ex: If you invoke the function with 29, it might print, 'Wow, it is hot today!'

