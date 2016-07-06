// Task 02. Get largest number
// 100/100

function solve(args) {
    var nums = args[0].split(' '),
        a = +nums[0],
        b = +nums[1],
        c = +nums[2];

    function getMax(a, b) {
        return a > b ? a : b;
    }

    return getMax(getMax(a, b), c);
}

console.log(solve(['8 3 6']));
console.log(solve(['7 19 19']));
