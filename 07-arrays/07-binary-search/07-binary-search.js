// Task 06. Binary search
// 100/100

function solve(args) {
    var arr = args[0].split('\n'),
        n = +arr[0],
        x = +arr[arr.length - 1];

    arr = arr.slice(1, arr.length - 1).map(function(n) {
        return +n;
    });

    function binarySearch(arr, x, left, right) {
        var middle = ((left + right) / 2) | 0;

        if (right < left) {
            return -1;
        }

        if (arr[middle] > x) {
            return binarySearch(arr, x, left, middle - 1);
        }

        if (arr[middle] < x) {
            return binarySearch(arr, x, middle + 1, right);
        }

        return middle;
    }

    return binarySearch(arr, x, 0, arr.length);
}

console.log(solve(['10\n1\n2\n4\n8\n16\n31\n32\n64\n77\n99\n32']));
