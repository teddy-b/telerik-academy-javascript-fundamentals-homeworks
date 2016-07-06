// Task 02. Divide by 7 and 5
// 100/100

function solve(arr) {
    var n = arr[0],
        result = (n % 5 === 0 && n % 7 === 0 ? 'true ' : 'false ') + n;

    return result;
}
