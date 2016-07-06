// Task 03. English digit
// 100/100

function solve(args) {
    var n = +args[0],
        arr = args[1].split(' ').map(function(x) {
            return +x;
        }),
        x = +args[2];

    function appearanceCount(arr, x) {
        var count = 0;

        arr.forEach(function(y) {
            if (x === y)
            return count++;
        });

        return count;
    }

    return appearanceCount(arr, x);
}

console.log(solve(['8', '28 6 21 6 -7856 73 73 -56', '73']));
