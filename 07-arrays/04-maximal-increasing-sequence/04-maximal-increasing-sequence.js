// Task 04. Maximal increasing sequence
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
        current = +(arr[i]);
        prev = +(arr[i - 1]);

        if (current > prev) {
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

console.log(solve(['8\n7\n3\n2\n3\n4\n2\n2\n4']));
