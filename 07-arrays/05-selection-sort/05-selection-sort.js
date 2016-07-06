// Task 05. Selection sort
// 100/100

function solve(args) {
    var arr = args[0].split('\n'),
        n = +arr[0],
        i,
        j,
        min;

    arr = arr.slice(1).map(function(n) {
        return +n;
    });

    for (i = 0; i < n - 1; i += 1) {
        min = i;

        for (j = i + 1; j < n ; j += 1) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (arr[min] < arr[i]) {
            arr[i] = arr[i] ^ arr[min];
            arr[min] = arr[i] ^ arr[min];
            arr[i] = arr[i] ^ arr[min];
        }
    }

    return arr.join('\n');
}

console.log(solve(['6\n3\n4\n1\n5\n2\n6']));
console.log(solve(['10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20']));
