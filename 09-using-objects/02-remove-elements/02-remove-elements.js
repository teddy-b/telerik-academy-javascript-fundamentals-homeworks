// Task 02. Remove elements
// 100/100

function solve(arr) {
    Array.prototype.remove = function(value) {
        var i,
            len = this.length,
            newArr = [];

        for (i = 0; i < len; i += 1) {
            if (arr[i] !== value) {
                newArr.push(arr[i]);
            }
        }

        return newArr;
    };

    arr = arr.remove(arr[0]);

    return arr.join('\n');
}

console.log(solve(['1', '2', '3', '2', '1', '2', '3', '2']));

console.log(solve([
    '_h/_',
    '^54F#',
    'V',
    '^54F#',
    'Z285',
    'kv?tc`',
    '^54F#',
    '_h/_',
    'Z285',
    '_h/_',
    'kv?tc`',
    'Z285',
    '^54F#',
    'Z285',
    'Z285',
    '_h/_',
    '^54F#',
    'kv?tc`',
    'kv?tc`',
    'Z285'
]));
