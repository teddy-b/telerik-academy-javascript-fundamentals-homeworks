// Task 03. Rectangles
// 100/100

function solve(arr) {
    var width = arr[0],
        heigth = arr[1],
        perimeter = width * heigth,
        area = 2 * width + 2 * heigth,
        result = perimeter.toFixed(2) + ' ' + area.toFixed(2);

    return result;
}
