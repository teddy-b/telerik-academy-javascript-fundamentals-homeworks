// Task 03. Youngest person
// 100/100

function solve(args) {
    var i,
        len = args.length,
        person,
        people = [],
        youngest;

    for (i = 0; i < len; i += 3) {
        person = {};

        person.firstname = args[i];
        person.lastname = args[i + 1];
        person.age = args[i + 2];

        people.push(person);
    }

    youngest = people.sort(function(a, b) {
        return a.age - b.age;
    })[0];

    return youngest.firstname + ' ' + youngest.lastname;
}

console.log(solve([
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42'
]));

console.log(solve([
    'Penka', 'Hristova', '61',
    'System', 'Failiure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72'
]));
