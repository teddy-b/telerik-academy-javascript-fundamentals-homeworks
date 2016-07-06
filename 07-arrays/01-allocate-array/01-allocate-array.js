// Task 01. Allocate array
// 100/100

function solve(args) {
    var n = +args,
        arr = [],
        i,
        multiplier = 5;

    for (i = 0; i < n; i += 1) {
        arr.push(i * multiplier);
    }

    return arr.join('\n');
}

console.log(solve('5'));
