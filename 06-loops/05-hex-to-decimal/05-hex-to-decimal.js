// Task 05. Hex to Decimal
// 100/100

function solve(hex) {
    var n = hex[0],
        len = n.length - 1,
        i,
        j,
        base = 16,
        pow,
        digit,
        dec = 0,
        chars = {
            'A': 10,
            'B': 11,
            'C': 12,
            'D': 13,
            'E': 14,
            'F': 15
        };

    for (i = len; i >= 0; i -= 1) {
        digit = n[i];
        pow = 1;
        digit = isNaN(digit) ? chars[digit] : +digit;

        for (j = 1; j < len - i + 1; j += 1) {
            pow *= base;
        }

        dec += digit * pow;
    }

    return dec;
}

console.log(solve(['FE']));
console.log(solve(['1AE3']));
console.log(solve(['4ED528CBB4']));
