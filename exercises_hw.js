// Practice what you have learned with these exercises. 
// Use console.log() to check your work for each problem.






// *******Basic Functions*******

var counter = 0;
// 1. Write a function that will add 5 to the counter value each time you invoke it.

// 2. Write a function that will divide the counter value by 3 and return the remainder.

// 3. Write a function that will print 'ODD' or 'EVEN' based on the counter value.

// *******console.log vs return*******

// 1. Write 2 functions.  Both should accept a string as a parameter.  In the first, return the string.
// In the second, console.log the string.  What do you see in the console when you invoke each one?
// Can you use a variable to catch the return value from the first function?

// *******Conditionals and Loops*******

// 1. Write a function that accepts a number as a parameter and prints a message that depends on the number.
// Ex: If you invoke the function with 29, it might print, 'Wow, it is hot today!'

// 2. Write a function that accepts 2 numbers (begin and end of a range).  Loop through the range
// and print a message for each.

// *******Arrays*******

// 1. Declare a variable and assign it to an empty array.

// 2. Add the names of three cities you would like to visit to your array.

// 3. Write a function that will loop over your array and print, 'I would like to visit (city name)'.

// 4. Write a function that will loop over your array and print 'long' if the city's name has more
// than 6 letters, or 'short' if the city's name 6 or fewer letters.

// *******Objects*******

// 1. Create an object called 'me' with properties for your name, age, city, job.

// 2. To your "me" object, add a key of "family" with the value being an array of your family members.
// Example of desired output: { name: 'Rachel Koldenhoven',
//                              age: 44,
//                              city: 'Denver',
//                              jobTitle: 'educator',
//                               family: ['Galya', 'Emma', 'Hank'] }

// 3. Update your city.


// Use the following Object for questions 4-9:
var invitees = { adults: [{
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
