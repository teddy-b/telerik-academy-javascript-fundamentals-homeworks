// Task 09. Point, Circle, Rectangle
// 100/100

function solve(arr) {
    var x = +arr[0],
        y = +arr[1],
        r = 1.5,
        isInCircle,
        isInRectangle,
        result = '';

    isInCircle = ((x - 1) * (x - 1) + (y - 1) * (y - 1) <= r * r);
    result += isInCircle ? 'inside circle ' : 'outside circle ';

    // left = -1
    // right = left + width = -1 + 6 = 5
    // bottom = top - height = 1 - 2 = -1
    // top = 1
    isInRectangle = (x >= -1) && (x <= 5) && (y >= -1) && (y <= 1);
    result += isInRectangle ? 'inside rectangle' : 'outside rectangle';

    return result;
}
