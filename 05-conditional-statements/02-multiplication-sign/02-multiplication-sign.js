// Task 02. Multiplication Sign
// 100/100

function solve(arr) {
    var a = arr[0],
        b = arr[1],
        c = arr[2],
        product = a * b * c;

    if (product > 0) {
        return '+';
    }

    if (product < 0) {
        return '-';
    }

    if (product === 0) {
        return '0';
    }
}
