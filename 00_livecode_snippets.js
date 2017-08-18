// variables and types
var string = 'a string contains text in quote marks';
var num = 3;
var numStr = '3';
var boolType = false;

string
num
numStr
boolType

// variables & mutability
var x = 1;
x
x = 2;
x
x = 3;
x

// expressions and operators

var str = 'a string'

str.length

str.length > 4

str.length >= 8

var num = 3;
var numStr = '3';

num < (3+1)

num <= 4

num == numStr

num != numStr

num === numStr

num !== numStr

var lowStr = 'hello';
var upStr = 'HELLO';

lowStr == upStr;
lowStr === upStr;

var string = 'string';
var num6 = 6
// && (logical and), both conditions must evaluate to true for the expression to return true
(string.length == num6) && (num6 > 3)

(string.length == num6) && (string.length != 6)


// || (logical or), at least one condition must evaluate to true to return true
(string.length > 7) || (num6 >= 8)

(string.length < 6) || (num6 >= 2)


// ! (logical not), takes a single Boolean value and inverts it
!(4 > 9)

!(string.length == num6)

(1<2) && (3+4 >= 7) || false
(1<2) && (3+4 > 7) || true

// Functions

var add = function(a, b) {
    return a + b;
}

add(2, 4);

var subtract = function(num1, num2) {
    return num1 - num2;
}

subtract(2, 4);

var formula = function(num1,num2) {
   return num1 * 2 + num1 * num2 - num2;
}
formula(2, 4);

// console.log vs return

var addR = function(a, b) {
    return a + b;
}

var addL = function(a, b) {
    console.log(a + b);
}

var result = addR(3,4);
console.log(result)

addL(5,6);

// comments on one line

/* JavaScript will ignore
this comment on 
multiple lines */

// conditionals

var bigNumber = function(numA, numB) {

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

var pokemon = {
    englishName: "Eevee",
    japaneseName: "Eievui",
    eeveelutions: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbeon", "Leafeon", "Glaceon", "Sylveon"],
    type: "Normal",
    hp: 20,
    attack: function() {
        console.log('Attacking!!!');
    }
}

// Functions calling Functions

var function1 = function() {
    console.log("I");
}

var function2 = function() {
    console.log("like");
}

var function3 = function() {
    console.log("JavaScript!");
}

var allTogether = function() {
    function1();
    function2();
    function3();
}

allTogether();



// Day 2 problems
// variables

var bookTitle = "Eloquent JavaScript";
var pages = 472;

var myPage;
myPage = 0;

var read = function() {
    return myPage++;
}


// arrays
var studentArr = ["Oumou", "Susma", "Gilberto", "Hsa"];
var favoriteNums = [10, 13, 16, 17, 18];
var mixedArr = ["string", 3, false];
var emptyArr = [];


var names = ["JavaScript", "Rachel", "Santa Claus"];

var greeter = function(array) {
    for(var i = 0; i < array.length; i++) {
        console.log("Hello ", array[i]);
    }
}

greeter(names);

var login = function(userId, pw) {
    if(pw) {
        user.loggedIn = true;
    }
    return user;
}

login('401303', 'mypassword');
