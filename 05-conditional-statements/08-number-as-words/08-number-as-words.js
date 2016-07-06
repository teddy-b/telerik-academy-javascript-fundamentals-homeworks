// Task 08. Number as Words
// 100/100

function solve(arr) {
    var number = +arr[0],
        hundreds,
        numberDividedToTen,
        tens,
        ones,
        result = '';

    if (number <= 19) {
        switch (number) {
            case 0: result += 'Zero'; break;
            case 1: result += 'One'; break;
            case 2: result += 'Two'; break;
            case 3: result += 'Three'; break;
            case 4: result += 'Four'; break;
            case 5: result += 'Five'; break;
            case 6: result += 'Six'; break;
            case 7: result += 'Seven'; break;
            case 8: result += 'Eight'; break;
            case 9: result += 'Nine'; break;
            case 10: result += 'Ten'; break;
            case 11: result += 'Eleven'; break;
            case 12: result += 'Twelve'; break;
            case 13: result += 'Thirteen'; break;
            case 14: result += 'Fourteen'; break;
            case 15: result += 'Fifteen'; break;
            case 16: result += 'Sixteen'; break;
            case 17: result += 'Seventeen'; break;
            case 18: result += 'Eighteen'; break;
            case 19: result += 'Nineteen'; break;
            default: break;
        }
    } else {
        hundreds = number / 100 | 0;
        numberDividedToTen = number / 10 | 0;
        tens = numberDividedToTen % 10;
        ones = number % 10;

        switch (hundreds) {
            case 1: result += 'One '; break;
            case 2: result += 'Two '; break;
            case 3: result += 'Three '; break;
            case 4: result += 'Four '; break;
            case 5: result += 'Five '; break;
            case 6: result += 'Six '; break;
            case 7: result += 'Seven '; break;
            case 8: result += 'Eight '; break;
            case 9: result += 'Nine '; break;
            case 0:
                switch (tens) {
                    case 2: result += 'Twenty '; break;
                    case 3: result += 'Thirty '; break;
                    case 4: result += 'Forty '; break;
                    case 5: result += 'Fifty '; break;
                    case 6: result += 'Sixty '; break;
                    case 7: result += 'Seventy '; break;
                    case 8: result += 'Eighty '; break;
                    case 9: result += 'Ninety '; break;
                    default: break;
                }
                break;
            default: break;
        }

        if (hundreds != 0) {
            result += 'hundred ';
        }

        if (hundreds != 0 && (tens != 0 || ones != 0)) {
            result += 'and ';
        }

        if (number > 99) {
            switch (tens) {
                case 1:
                    switch (ones) {
                        case 0: result += 'ten'; break;
                        case 1: result += 'eleven '; break;
                        case 2: result += 'twelve '; break;
                        case 3: result += 'thirteen'; break;
                        case 4: result += 'fourteen'; break;
                        case 5: result += 'fifteen'; break;
                        case 6: result += 'sixteen'; break;
                        case 7: result += 'seventeen'; break;
                        case 8: result += 'eighteen'; break;
                        case 9: result += 'nineteen'; break;
                        default: break;
                    }
                    break;
                case 2: result += 'twenty '; break;
                case 3: result += 'thirty '; break;
                case 4: result += 'forty '; break;
                case 5: result += 'fifty '; break;
                case 6: result += 'sixty '; break;
                case 7: result += 'seventy '; break;
                case 8: result += 'eighty '; break;
                case 9: result += 'ninety '; break;
                default: break;
            }
        }

        if (number > 19 && (tens > 1 || tens === 0)) {
            switch (ones) {
                case 1: result += 'one'; break;
                case 2: result += 'two'; break;
                case 3: result += 'three'; break;
                case 4: result += 'four'; break;
                case 5: result += 'five'; break;
                case 6: result += 'six'; break;
                case 7: result += 'seven'; break;
                case 8: result += 'eight'; break;
                case 9: result += 'nine'; break;
                default: break;
            }
        }
    }

    return result;
}

for (var i = 0; i <= 999; i += 1) {
    console.log(solve([i.toString()]));
}
