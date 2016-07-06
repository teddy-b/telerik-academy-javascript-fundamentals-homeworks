// Task 01. Say Hello
// 100/100

function solve(args) {
    var name = args[0];

    function greet(name) {
        return 'Hello, ' + name + '!';
    }

    return greet(name);
}

console.log(solve(['Peter']));
