// Task 03. English digit
// 100/100

function solve(args) {
    var n = +args[0];

    function getLastDigit(n) {
        var lastDigit = n % 10,
            word;

        switch (lastDigit) {
            case 0:
                word = 'zero';
                break;
            case 1:
                word = 'one';
                break;
            case 2:
                word = 'two';
                break;
            case 3:
                word = 'three';
                break;
            case 4:
                word = 'four';
                break;
            case 5:
                word = 'five';
                break;
            case 6:
                word = 'six';
                break;
            case 7:
                word = 'seven';
                break;
            case 8:
                word = 'eight';
                break;
            case 9:
                word = 'nine';
                break;
            default:
                word = 'NaN';
                break;
        }

        return word;
    }

    return getLastDigit(n);
}

console.log(solve(['42']));
