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