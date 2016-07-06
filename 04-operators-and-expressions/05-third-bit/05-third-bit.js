// Task 05. Third bit
// 100/100

function solve(arr) {
    var n = arr[0],
        bit = (n & (1 << 3)) >> 3;

    return bit;
}
