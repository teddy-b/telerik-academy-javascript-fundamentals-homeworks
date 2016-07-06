// Task 07. The biggest of five numbers
// 100/100

function solve(arr) {
    var i,
        len = arr.length,
        biggest = +arr[0],
        current;

    for (i = 1; i < len; i += 1) {
        current = +arr[i];

        if (current > biggest) {
            biggest = current;
        }
    }

    return biggest;
}
