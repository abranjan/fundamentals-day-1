// array methods
// 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.
let arr = [];
arr.push('apple');
arr.push('banana');
arr.push('orange');
arr.push('mango');
console.log(arr);
// 2. Add an additional item to the beginning of your Array.

arr.unshift('stawberry');
console.log(arr);
// 3. Remove the second and third items.

arr.splice(1,2);
console.log(arr);

// 4. Add two new items after the second item.

arr.splice(1,0,'Watermelon')
console.log(arr)

// 5. Write 'The current length of the array is....' using the .length method

console.log(`Length of array`,arr.length)

// Use the following Array for questions 6-11:
let things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
things.splice(2,1,'keyboard')
console.log(things)

// 7. Combine all of the elements of the array into a string.

let elementString = things.toString()
console.log(elementString)
console.log(typeof (elementString))

// 8. Declare a variable called lastItem.  Add two new items to lastItem, one at the beginning and one at the end.

let lastItem = ['Two','Three'];
lastItem.unshift('One');
lastItem.push('Four');
console.log(lastItem);

// 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.
let itemLast = lastItem.reverse()
console.log(itemLast)

// 10. Remove the first item of itemLast.

itemLast.shift();
console.log(itemLast)

// 11. Remove all items from itemLast

while(itemLast.length > 0) {
    itemLast.pop();
}
console.log(itemLast)

// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
let firstArray = [12, 5, 9, 27];
let secondArray = ['fish', 'dog'];

let numberPets = firstArray.concat(secondArray)
console.log(numberPets)

// Use the following array for questions 13-16:

let people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'
people.push('James')
people.push('John')
console.log(people);

// 14. Remove everybody except 'Andrea' and 'Ted'
let end = people.length
let flag
for(i = 0; i < end;i++)
{   //console.log(people[i])
    if(people[i] === 'Andrea' || people[i] === 'Ted')
        flag = 1;
    else
        people.splice(i,1)


}
console.log(people)
// 15. Add a new person to the beginning of the Array
people.unshift('Watson');

console.log(people)
// 16. Arrange the items alphabetically. Store this Array as orderedPeople
let mens= people.sort();
console.log(mens);

// 17. Create an array of arrays with the following three arrays:
let array1 = ["Fido", "Spot", "Rex", "Sparky"];
let array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"];
let array3 = ["White", "Black", "Spotted", "Tri-color"];

let finalArray = array1.concat(array2.concat(array3))
console.log(finalArray)
// 18. Remove "Sparky" and "White" from the above array of arrays.

end = finalArray.length
console.log(`initial length`,end)
for(i = 0; i< end;i++){
    if(finalArray[i] === 'Sparky' || finalArray[i] === 'White')
        finalArray.splice(i,1)
}
console.log(finalArray)
console.log(`Final length`,finalArray.length)
// BONUS 1: Try to arrange the following items from smallest to largest:

let sortingNumbers = [2, 5, 98, 55, 77, 300];
console.log(sortingNumbers.sort(function(a,b) { return a - b; }))

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
// let array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

//Goal
//let array2 = ['plant', 17, 2, 'Bill', 'dog'];

