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
