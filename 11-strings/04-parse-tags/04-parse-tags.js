// Task 04. Parse tags
// 40/100

function solve(args) {
    let str = args[0];

    function parseTags(str) {
        const upcaseStart = '<upcase>',
            upcaseEnd = '</upcase>',
            lowcaseStart = '<lowcase>',
            lowcaseEnd = '</lowcase>',
            orgcaseStart = '<orgcase>',
            orgcaseEnd = '</orgcase>';

        let upcase,
            lowcase,
            orgcase,
            len = str.length,
            newStr = '';

        for(let i = 0; i < len; i += 1) {
            if (str[i] === '\\') {
                continue;
            }

            if (str.substr(i, upcaseStart.length) === upcaseStart) {
                upcase = true;
                i += upcaseStart.length - 1;
                continue;
            }

            if (str.substr(i, upcaseEnd.length) === upcaseEnd) {
                upcase = false;
                i += upcaseEnd.length - 1;
                continue;
            }

            if (str.substr(i, lowcaseStart.length) === lowcaseStart) {
                lowcase = true;
                i += lowcaseStart.length - 1;
                continue;
            }

            if (str.substr(i, lowcaseEnd.length) === lowcaseEnd) {
                lowcase = false;
                i += lowcaseEnd.length - 1;
                continue;
            }

            if (str.substr(i, orgcaseStart.length) === orgcaseStart) {
                orgcase = true;
                i += orgcaseStart.length - 1;
                continue;
            }

            if (str.substr(i, orgcaseEnd.length) === orgcaseEnd) {
                orgcase = false;
                i += orgcaseEnd.length - 1;
                continue;
            }

            if (upcase) {
                newStr += str[i].toUpperCase();
                continue;
            }

            if (lowcase) {
                newStr += str[i].toLowerCase();
                continue;
            }

            newStr += str[i];
        }

        return newStr;
    }

    console.log(parseTags(str));
}

solve([
    'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.'
]);
