// Task 03. Maximal sequence
// 100/100

function solve(args) {
    var arr = args[0].split('\n'),
        n = arr[0],
        i,
        count = 1,
        maxCount = 1,
        current,
        prev;

    for (i = 2; i <= n; i += 1) {
        current = +arr[i];
        prev = +arr[i - 1];

        if (current == prev) {
            count += 1;
        } else {
            count = 1;
        }

        if (count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
}

console.log(solve(['10\n2\n1\n1\n2\n3\n3\n2\n2\n2\n1']));
