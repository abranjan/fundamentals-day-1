// arrays
var studentArr = ['Oumou', 'Susma', 'Gilberto', 'Hsa'];
var favoriteNums = [10, 13, 16, 17, 18];

console.log('\nTask #1: write a function which uses console.log to log the numbers 0-9');
var logNumbers = function() {
    for(var i = 0; i < 9; i++) {
        console.log(i);
    }
}
logNumbers(); // Solution has been provided for Task #1


console.log('\nTask #2: write a function to console.log each value in the following array');
var logArray = function(array) {
    for(var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
logArray([25, 101, 66, 10, 99]);


console.log('\nTask #3: write a function which *returns* the maximum value of an Array');
var max = function(array) {
    var result = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] > result) {
            result = array[i];
        }
    }
    return result;
}
var result = max([25, 101, 66, 10, 99]);
console.log('Result #3=' + result + ' (should be 101)');


console.log('\nTask #4: write a function to return the minimum value of an Array');
var min = function(array) {
    var result = array[0];
    for(var i = 0; i < array.length; i++) {
        if(array[i] < result) {
            result = array[i];
        }
    }
    return result;
}
var result = min([25, 101, 66, 10, 99]);
console.log('Result #4=' + result + ' (should be 10)');


console.log('\nTask #5: write a function which detects if a given value is in the array');
var inArray = function(array, number) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] === number) {
            return true;
        }
    }
    return false;
}
var result1 = inArray([25, 101, 66, 10, 99], 66);
var result2 = inArray([25, 101, 66, 10, 99], 77);
console.log('Task #5 result1=' + result1 + ' (should be true)'); 
console.log('Task #5 result2=' + result2 + ' (should be false)'); 


console.log('\nTask #6: write a function that builds an array where each item in the array is equal to its own index Number');
var indentityArray = function(size) {
    var newArray = [];
    for(var i = 0; i < size; i++) {
        newArray.push(i);
    }
    return newArray;
}
var result = indentityArray(10);
console.log('Result #6: ' + result + ' (should be [0,1,2,3,4,5,6,7,8,9])');


console.log('\nTask #7: write a funciton that makes an array of range of numbers, inclusive');
var range = function(begin, end) {
    var resultArray = [];
    for(var i = begin; i <= end; i++) {
        resultArray.push(i);
    }
    return resultArray;
}
var result = range(20, 25);
console.log('Result #7: ' + result + ' (Should be [20,21,22,23,24,25])');


console.log('\nAdvanced Requirement: write a function that builds an array where values are double the index if odd or quadruple if even');
var doubleOrQuadruple = function(size) {
    var resultArray = [];
    for(var i = 0; i < size; i++) {
        if(i%2 === 0) {
            resultArray.push(i*4);
        } else {
            resultArray.push(i*2);
        }
    }
    return resultArray;
}
var result = doubleOrQuadruple(10);
console.log('Advanced Result: ' + result + '(Should be [ 0, 2, 8, 6, 16, 10, 24, 14, 32, 18 ])');

