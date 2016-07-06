// Task 08. Replace tags
// 30/100

function solve(args) {
    let str = args[0],
        strLen = str.length,
        openTag = '<a href="',
        openTagLen = openTag.length,
        endOpenTag = '">',
        endOpenTagPos,
        href,
        closeTag = '</a>',
        closeTagLen = closeTag.length,
        closeTagPos,
        text,
        result = '';

    for(let i = 0; i < strLen; i += 1) {
        if (str.substr(i, openTagLen) === openTag) {
            endOpenTagPos = str.indexOf(endOpenTag, i);
            href = str.substring(i + openTagLen, endOpenTagPos);
            closeTagPos = str.indexOf(closeTag, endOpenTagPos + 1);
            text = str.substring(endOpenTagPos + 2, closeTagPos);
            result += `[${text}](${href})`;
            i = closeTagPos + closeTagLen - 1;
        } else {
            result += str[i];
        }
    }

    console.log(result);
}

solve(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);
