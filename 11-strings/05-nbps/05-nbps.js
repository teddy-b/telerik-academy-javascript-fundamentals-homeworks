// Task 05. nbps
// 100/100

function solve(args) {
    let str = args[0];

    function nbsp(str) {
        const nbsp = '&nbsp;';

        let len = str.length,
            newStr = '';

        for(let i = 0; i < len; i += 1) {
            if (str[i] === ' ') {
                newStr += nbsp;
            } else {
                newStr += str[i];
            }
        }

        return newStr;
    }

    console.log(nbsp(str));
}

solve(['hello world']);
solve(['This text contains 4 spaces!!']);
