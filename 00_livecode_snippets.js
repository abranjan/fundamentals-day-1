// variables and types
const string = 'a string contains text in quote marks';
const number = 3;
const numberStr = '3';
const boolType = false;

string
number
numberStr
boolType

// variables & mutability
let x = 1;
x
x = 2;
x
x = 3;
x

// expressions and operators

const str = 'a string';

str.length

str.length > 4

str.length >= 8

const num = 3;
const numStr = '3';

num < (3+1)

num <= 4

num == numStr

num != numStr

num === numStr

num !== numStr

const lowStr = 'hello';
const upStr = 'HELLO';

lowStr == upStr;
lowStr === upStr;

const string2 = 'string';
const num6 = 6;
// && (logical and), both conditions must evaluate to true for the expression to return true
console.log((string2.length == num6) && (num6 > 3));

console.log((string2.length == num6) && (string2.length != 6));


// || (logical or), at least one condition must evaluate to true to return true
console.log((string2.length > 7) || (num6 >= 8));

console.log((string2.length < 6) || (num6 >= 2));


// ! (logical not), takes a single Boolean value and inverts it
console.log(!(4 > 9));

console.log(!(string2.length == num6));

console.log((1<2) && (3+4 >= 7) || false);
console.log((1<2) && (3+4 > 7) || true);

// Functions

const add = function(a, b) {
    return a + b;
};

add(2, 4);

const subtract = function(num1, num2) {
    return num1 - num2;
};

subtract(2, 4);

const formula = function(num1,num2) {
   return num1 * 2 + num1 * num2 - num2;
};
formula(2, 4);

// console.log vs return

const addR = function(a, b) {
    return a + b;
};

const addL = function(a, b) {
    console.log(a + b);
};

const result = addR(3,4);
console.log(result);

addL(5,6);

// comments on one line

/* JavaScript will ignore
this comment on 
multiple lines */

// conditionals

const bigNumber = function(numA, numB) {

  if(numA > numB) {
    console.log('A is big!');
  } else {
    console.log('B is big!');
  }
};

bigNumber(4, 89);


// warm up day 3

'hello' === 'Hello';

1 === 1 && 4 > 6;

3 !== '3' || 3 === 'three';

// Objects

const pokemon = {
    englishName: "Eevee",
    japaneseName: "Eievui",
    eeveelutions: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbeon", "Leafeon", "Glaceon", "Sylveon"],
    type: "Normal",
    hp: 20,
    attack: function() {
        console.log('Attacking!!!');
    }
};

// Functions calling Functions

const function1 = function() {
    console.log("I");
};

const function2 = function() {
    console.log("like");
};

const function3 = function() {
    console.log("JavaScript!");
};

const allTogether = function() {
    function1();
    function2();
    function3();
};

allTogether();



// Day 2 problems
// variables

const bookTitle = "Eloquent JavaScript";
const pages = 472;

let myPage;
myPage = 0;

const read = function() {
    return myPage++;
};


// arrays
const studentArr = ["Oumou", "Susma", "Gilberto", "Hsa"];
const favoriteNums = [10, 13, 16, 17, 18];
const mixedArr = ["string", 3, false];
const emptyArr = [];


const names = ["JavaScript", "Rachel", "Santa Claus"];

const greeter = function(array) {
    for(let i = 0; i < array.length; i++) {
        console.log("Hello ", array[i]);
    }
};

greeter(names);

const login = function(userId, pw) {
    if(pw) {
        // user.loggedIn = true;    log in the user
    }
    // return user;  return the user object
};

login('401303', 'mypassword');
