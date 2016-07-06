// Task 06. Quadratic equation
// 100/100

function solve(arr) {
    var a = +arr[0],
        b = +arr[1],
        c = +arr[2],
        d = b * b - 4 * a * c,
        x1,
        x2;

    if (d === 0) {
        x1 = - b / (2 * a);

        return 'x1=x2=' + x1.toFixed(2);
    }

    if (d > 0) {
        x1 = (- b - Math.sqrt(d)) / (2 * a);
        x2 = (- b + Math.sqrt(d)) / (2 * a);

        return 'x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2);
    }

    return 'no real roots';
}

console.log(solve(['2', '5', '-3']));