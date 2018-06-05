// *******Arrays*******

// 1. Declare a variable and assign it to an empty array.
let cities = [];
// 2. Add the names of three cities you would like to visit to your array.
cities =[`newyork`,`london`,`home`];
// 3. Write a function that will loop over your array and print, 'I would like to visit (city name)'.

cities.forEach(function (element) {
    console.log(`I would like to visit`,element)
})

// 4. Write a function that will loop over your array and print 'long' if the city's name has more
// than 6 letters, or 'short' if the city's name 6 or fewer letters.

cities.forEach(function(element){
    if(element.length>6)
        console.log(`long`)
    else
        console.log(`short`)
})

//arrays
const studentArr = ['Oumou', 'Susma', 'Gilberto', 'Hsa'];
const favoriteNums = [10, 13, 16, 17, 18];

console.log('\nTask #2: write a function to console.log each value in the following array');
const logArray = function(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
logArray([25, 101, 66, 10, 99]);
//
//
console.log('\nTask #3: write a function which *returns* the maximum value of an Array');
const max = function(array) {
    let result = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > result) {
            result = array[i];
        }
    }
    return result;
};
const result = max([25, 101, 66, 10, 99]);
console.log('Result #3=' + result + ' (should be 101)');


console.log('\nTask #4: write a function to return the minimum value of an Array');
const min = function(array) {
    let result = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] < result) {
            result = array[i];
        }
    }
    return result;
};
const result = min([25, 101, 66, 10, 99]);
console.log('Result #4=' + result + ' (should be 10)');
//
//
console.log('\nTask #5: write a function which detects if a given value is in the array');
const inArray = function(array, number) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === number) {
            return true;
        }
    }
    return false;
};
const result1 = inArray([25, 101, 66, 10, 99], 66);
const result2 = inArray([25, 101, 66, 10, 99], 77);
console.log('Task #5 result1=' + result1 + ' (should be true)');
console.log('Task #5 result2=' + result2 + ' (should be false)');

//
console.log('\nTask #6: write a function that builds an array where each item in the array is equal to its own index Number');
const indentityArray = function(size) {
    let newArray = [];
    for(let i = 0; i < size; i++) {
        newArray.push(i);
    }
    return newArray;
};
const result = indentityArray(10);
console.log('Result #6: ' + result + ' (should be [0,1,2,3,4,5,6,7,8,9])');
//

console.log('\nTask #7: write a funciton that makes an array of range of numbers, inclusive');
const range = function(begin, end) {
    let resultArray = [];
    for(let i = begin; i <= end; i++) {
        resultArray.push(i);
    }
    return resultArray;
};
const result = range(20, 25);
console.log('Result #7: ' + result + ' (Should be [20,21,22,23,24,25])');
//

console.log('\nAdvanced Requirement: write a function that builds an array where values are double the index if odd or quadruple if even');
const doubleOrQuadruple = function(size) {
    let resultArray = [];
    for(let i = 0; i < size; i++) {
        if(i%2 === 0) {
            resultArray.push(i*4);
        } else {
            resultArray.push(i*2);
        }
    }
    return resultArray;
};
const result = doubleOrQuadruple(10);
console.log('Advanced Result: ' + result + '(Should be [ 0, 2, 8, 6, 16, 10, 24, 14, 32, 18 ])');
//
