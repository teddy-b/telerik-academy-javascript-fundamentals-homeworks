// Task 03. The biggest of Three
// 100/100

function solve(arr) {
    var a = +arr[0],
        b = +arr[1],
        c = +arr[2],
        biggest = a;

    if (b > biggest) {
        biggest = b;
    }

    if (c > biggest) {
        biggest = c;
    }

    return biggest;
}
