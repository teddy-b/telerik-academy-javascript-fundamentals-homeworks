// Task 02. Correct brackets
// 100/100

function solve(args) {
    let str = args[0];

    function checkBrackets(str) {
        let len = str.length,
            count = 0;

        for (let i = 0; i < len; i += 1) {
            if (str[i] === '(') {
                count += 1;
            }

            if (str[i] === ')') {
                count -= 1;
            }
        }

        return !count ? 'Correct' : 'Incorrect';
    }

    console.log(checkBrackets(str));
}

solve(['((a+b)/5-d)']);
solve([')(a+b))']);
