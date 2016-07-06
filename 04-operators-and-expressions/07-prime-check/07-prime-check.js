// Task 07. Prime check
// 100/100

function solve(arr) {
    var n = arr[0],
        i,
        len = Math.sqrt(n);

    if (n < 2) {
        return false;
    }

    for (i = 2; i <= len; i += 1) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}
