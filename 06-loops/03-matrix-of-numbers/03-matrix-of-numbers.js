// Task 03. Matrix of Numbers
// 100/100

function solve(arg) {
    var n = +arg,
        i,
        j = 0,
        len = n * n,
        result = '';

    for (i = 1; i <= len; i += 1) {
        if (i % n) {
            result += i % n + j + ' ';
        } else {
            result += i % n + n + j + '\n';
            j += 1;
        }
    }

    return result;
}

console.log(solve([2]));
console.log(solve([3]));
console.log(solve([4]));