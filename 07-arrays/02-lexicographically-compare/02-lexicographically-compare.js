// Task 02. Lexicographically compare
// 100/100

function solve(args) {
    var arr = args[0].split('\n'),
        firstStr = arr[0],
        secondStr = arr[1],
        minLen = Math.min(firstStr.length, secondStr.length),
        i,
        firstStrCh,
        secondStrCh;

    for (i = 0; i < minLen; i += 1) {
        firstStrCh = firstStr[i];
        secondStrCh = secondStr[i];

        if (firstStrCh > secondStrCh) {
            return '>';
        }

        if (firstStrCh < secondStrCh) {
            return '<';
        }
    }

    if (firstStr.length > secondStr.length) {
        return '>';
    }

    if (firstStr.length < secondStr.length) {
        return '<';
    }

    return '=';
}

console.log(solve(['hello\nhalo']));
console.log(solve(['food\nfood']));
