// //objects
// const pokemon = {
//     englishName: "Eevee",
//     japaneseName: "Eievui",
//     eeveelutions: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbeon", "Leafeon", "Glaceon", "Sylveon"],
//     type: "Normal",
//     hp: 20,
//     attack: function() {
//         console.log("Attacking!!!!");
//     },
// };
//
// console.log("This is a JavaScript object: ", pokemon);
//
// //Access a property with dot notation:  obj.property
// console.log("The pokemon's name is: ", pokemon.japaneseName);
//
// //Change a property
// pokemon.hp = 25;
// console.log("Pokemon's hp are now: ", pokemon.hp);
//
// //Add a property
// pokemon.awake = true;
// console.log("Updated pokemon with new property: ", pokemon);
//
// //Invoke the function (method)
// pokemon.attack();



//
// // Create an emtpy array called "books".
// let books= [];
// // Create three objects that contain book titles, their author, and number of pages.
// object1 = {
//     title:`Origin`,
//     author:`Dan Brown`,
//     numberOfPages: 200,
// }
//
// object2 = {
//     title:`C`,
//     author:`Kanetkar`,
//     numberOfPages: 350,
// }
//
// object3 = {
//     title:`Another book`,
//     author:`Another author`,
//     numberOfPages: 312,
// }
// // Insert the three objects into the "books" array.
//
// let book = [object1,object2,object3]
//
// // Example of desired array: [ youHadMeAtWoof, bangkokHaunts, theCatcherInTheRye]
// // Example of desired object: {title: "You Had Me at Woof", author: "Julie Klum", pages: 207}
//
//
// // Access the author of the first book.
// console.log(book[0].author)
// // Print the length of the author the third book.
// console.log(book[2].author.length);
// // To each book object variable, add a key of "dateRead" with a value of the year you read the book.
// book[0].dateRead=1995;
//
// console.log(book[0].dateRead);
// *******Objects*******

// // 1. Create an object called 'me' with properties for your name, age, city, job.
// me = {
//     name:`Abhi`,
//     age:22,
//     city:`jamshedpur`,
//     job:`aspl`
//
// }
// // 2. To your "me" object, add a key of "family" with the value being an array of your family members.
// // Example of desired output: { name: 'Rachel Koldenhoven',
// //                              age: 44,
// //                              city: 'Denver',
// //                              jobTitle: 'educator',
// //                               family: ['Galya', 'Emma', 'Hank'] }
//
// me.family= ['Mom',`Dad`,`Sis`];
// console.log(me);
//
// // 3. Update your city.
// me.city = `bangalore`;
// console.log(me);
// Use the following Object for questions 4-9:
const invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in her dinnerChoice array)

// 5. Access Pablo's table number.

// 6. Access Lauren's seating specialConsideration.

// 7. Access Billy's dessert choice (this will be the third item in his dinneChoice array)

// 8. Access Ada's allergies.

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."
