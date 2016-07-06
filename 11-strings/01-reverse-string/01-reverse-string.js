// Task 01. Reverse string
// 100/100

function solve(args) {
    let str = args[0];

    function reverseString(str) {
        let len = str.length,
            reversedStr = '';

        for (let i = len - 1; i >= 0; i -= 1) {
            reversedStr += str[i];
        }

        return reversedStr;
    }

    console.log(reverseString(str));
}

solve(['sample']);
solve(['qwertytrewq']);
