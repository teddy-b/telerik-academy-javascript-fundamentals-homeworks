// Task 02. MMSA (Min, Max, Sum, Average) of N Numbers
// 100/100

function solve(arr) {
    var min = +arr[0],
        max = +arr[0],
        sum = +arr[0],
        avg,
        i,
        len = arr.length,
        current,
        result = '';

    for (i = 1; i < len; i += 1) {
        current = +arr[i];

        if (current < min) {
            min = current;
        }

        if (max < current) {
            max = current;
        }

        sum += current;
    }

    avg = sum / len;

    result += 'min=' + min.toFixed(2) + '\n' +
        'max=' + max.toFixed(2) + '\n' +
        'sum=' + sum.toFixed(2) + '\n' +
        'avg=' + avg.toFixed(2);

    return result;
}

console.log(solve([2, 5, 1]));