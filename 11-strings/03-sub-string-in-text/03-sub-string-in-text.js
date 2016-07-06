// Task 03. Sub-string in text
// 100/100

function solve(args) {
    let substr = args[0].toLowerCase(),
        str = args[1].toLowerCase();

    function countSubstring(substr, str) {
        let pos = str.indexOf(substr),
            count = 0;

        while (pos !== -1) {
            count += 1;
            pos = str.indexOf(substr, pos + 1);
        }

        return count;
    }

    console.log(countSubstring(substr, str));
}

solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);
