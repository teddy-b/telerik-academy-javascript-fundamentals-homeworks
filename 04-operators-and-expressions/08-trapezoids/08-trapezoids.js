// Task 08. Trapezoids
// 100/100

function solve(arr) {
    var a = +arr[0],
        b = +arr[1],
        h = +arr[2],
        area = ((a + b) / 2) * h;

    return area.toFixed(7);
}
