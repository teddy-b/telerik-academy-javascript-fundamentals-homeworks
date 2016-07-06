// Task 04. Sort Three Numbers
// 100/100

function solve(arr) {
    var a = +arr[0],
        b = +arr[1],
        c = +arr[2];

    if (a > b) {
        if (b > c) {
            return a + ' ' + b + ' ' + c;
        } else {
            if (a > c) {
                return a + ' ' + c + ' ' + b;
            } else {
                return c + ' ' + a + ' ' + b;
            }
        }
    } else {
        if (b > c) {
            if (a > c) {
                return b + ' ' + a + ' ' + c;
            } else {
                return b + ' ' + c + ' ' + a;
            }
        } else {
            return c + ' ' + b + ' ' + a;
        }
    }
}
