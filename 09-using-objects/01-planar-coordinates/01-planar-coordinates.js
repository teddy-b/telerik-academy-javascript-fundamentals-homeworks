// Task 01. Planar coordinates
// 40/100

function solve(args) {
    var points = args.map(function(x) {
            return +x;
        }),
        i,
        len = points.length,
        Xa,
        Ya,
        Xb,
        Yb,
        distance,
        lines = [],
        result = '';

    function calculateDistance(Xa, Ya, Xb, Yb) {
        return Math.sqrt(
            (Xa - Xb) * (Xa - Xb) +
            (Ya - Yb) * (Ya - Yb)
        );
    }

    function triangleCanBeBuild(lines) {
        var a = lines[0],
            b = lines[1],
            c = lines[2];

        if (a + b > c &&
            a + c > b &&
            b + c > a) {
            return'Triangle can be built';
        }

        return 'Triangle can not be built';
    }

    for (i = 0; i < len; i += 4) {
        Xa = points[i];
        Ya = points[i + 1];
        Xb = points[i + 2];
        Yb = points[i + 3];
        distance = calculateDistance(Xa, Ya, Xb, Yb).toFixed(2);
        lines.push(distance);
        result += distance + '\n';
    }

    result += triangleCanBeBuild(lines);

    return result;
}

console.log(solve([
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
]));

console.log(solve([
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
]));
