//objects
var pokemon = {
    englishName: "Eevee",
    japaneseName: "Eievui",
    eeveelutions: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbeon", "Leafeon", "Glaceon", "Sylveon"],
    type: "Normal",
    hp: 20,
    attack: function() {
        console.log("Attacking!!!!");
    },
}

console.log("This is a JavaScript object: ", pokemon);

//Access a property with dot notation:  obj.property
console.log("The pokemon's name is: ", pokemon.japaneseName);

//Change a property
pokemon.hp = 25;
console.log("Pokemon's hp are now: ", pokemon.hp);

//Add a property
pokemon.awake = true;
console.log("Updated pokemon with new property: ", pokemon);

//Invoke the function (method)
pokemon.attack();




// Create an emtpy array called "books".
// Create three objects that contain book titles, their author, and number of pages.
// Insert the three objects into the "books" array.
// Example of desired array: [ youHadMeAtWoof, bangkokHaunts, theCatcherInTheRye]
// Example of desired object: {title: "You Had Me at Woof", author: "Julie Klum", pages: 207}


// Access the author of the first book.

// Print the length of the author the the third book.

// To each book object variable, add a key of "dateRead" with a value of the year you read the book.
