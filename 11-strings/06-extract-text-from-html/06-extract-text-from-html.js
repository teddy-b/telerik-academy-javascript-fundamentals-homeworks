// Task 06. Extract text from HTML
// 0/100

function solve(args) {
    let html = args.map(function(a){
        return a.trim();
    });

    function extractText(html) {
        let len = html.length,
            text = '';

        for(let i = 0; i < len; i += 1) {
            let line = html[i],
                lineLen = line.length,
                inTag = false;

            for(let j = 0; j < lineLen; j += 1) {
                if (line[j] === '<') {
                    inTag = true;
                } else if (line[j] === '<' && line[j + 1] === '/') {
                    inTag = true;
                    i += 1;
                } else if (line[j] === '>') {
                    inTag = false;
                } else {
                    if (!inTag) {
                        text += line[j];
                    }
                }
            }
        }

        return text;
    }

    console.log(extractText(html));
}

solve([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);
