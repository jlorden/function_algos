// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function doublevision(arr) {
    for (var i = 0; i <= arr.length; i++) {
        newarr = arr[i] * 2;
    }
    return(newarr)
}
var newarr = [];
var arr = doublevision([1,2,3]);
console.log(arr);
console.log(newarr);