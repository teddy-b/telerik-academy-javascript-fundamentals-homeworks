// Task 06. Frequent number
// 100/100

function solve(args) {
    var arr = args[0].split('\n'),
        n = +arr[0],
        i,
        j,
        count,
        maxCount = 1,
        maxCountNum;

    arr = arr.slice(1).map(function(n) {
        return +n;
    });

    maxCountNum = arr[0];

    for (i = 0; i < n - 1; i += 1) {
        count = 1;

        for (j = i + 1; j < n ; j += 1) {
            if (arr[i] == arr[j]) {
                count += 1;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            maxCountNum = arr[i];
        }
    }

    return maxCountNum + ' (' + maxCount + ' times)';
}

console.log(solve(['13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n3']));
