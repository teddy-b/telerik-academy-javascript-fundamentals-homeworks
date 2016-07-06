// Task 06. Point in a circle
// 100/100

function solve(arr) {
    var x = arr[0],
        y = arr[1],
        r = 2,
        distance = Math.sqrt(x * x + y * y),
        isInside = distance <= r,
        result = (isInside ? 'yes ' : 'no ') + distance.toFixed(2);

    return result;
}
