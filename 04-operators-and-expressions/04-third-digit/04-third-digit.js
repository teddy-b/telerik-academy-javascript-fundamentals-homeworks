// Task 04. Third digit
// 100/100

function solve(arr) {
    var n = arr[0],
        digit = Math.floor(n / 100) % 10,
        requiredDigit = 7,
        result = digit == requiredDigit ? 'true' : 'false ' + digit;

    return result;
}
