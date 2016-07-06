// Task 01. Numbers from 1 to N
// 100/100

function solve(arr) {
    var n = arr[0],
        i,
        result = '1';

    for (i = 2; i <= n; i += 1) {
        result += ' ' + i;
    }

    return result;
}
