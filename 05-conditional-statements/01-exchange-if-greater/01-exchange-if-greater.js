// Task 01. Exchange if greater
// 100/100

function solve(arr) {
    var a = arr[0],
        b= arr[1];

    if (a > b) {
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
    }

    return a + ' ' + b;
}
