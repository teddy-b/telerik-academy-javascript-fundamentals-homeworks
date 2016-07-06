// Task 10. Prime numbers
// 100/100

function solve(args) {
    var n = +args[0],
        i;

    function primeCheck(n) {
        var i,
            len = Math.sqrt(n);

        if (n < 2) {
            return false;
        }

        for (i = 2; i <= len; i += 1) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }

    for (i = n; i > 0; i -= 1) {
        if (primeCheck(i)) {
            return i;
        }
    }

    return -1;
}

// Using the Sieve of Eratosthenes algorithm

//function solve(args) {
//    var n = +args[0],
//        arr = [],
//        i,
//        len = Math.sqrt(n);
//
//    for (i = 0; i < n + 1; i += 1) {
//        arr.push(true);
//    }
//
//    for (i = 2; i <= len; i += 1) {
//        if (arr[i] === true) {
//            for (j = i * i; j <= n; j += i) {
//                arr[j] = false;
//            }
//        }
//    }
//
//    for (i = n; i > 2; i -= 1) {
//        if (arr[i] === true) {
//            return i;
//        }
//    }
//}

console.log(solve(['13']));
console.log(solve(['126']));
console.log(solve(['26']));
