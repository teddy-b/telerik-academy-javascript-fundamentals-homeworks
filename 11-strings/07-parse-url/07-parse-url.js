// Task 07. Parse URL
// 100/100

function solve(args) {
    let parts = args[0].split('://'),
        protocol = parts[0],
        separator = parts[1].indexOf('/'),
        server = parts[1].substring(0, separator),
        resource = parts[1].substring(separator, parts[1].length),
        result = `protocol: ${protocol}\nserver: ${server}\nresource: ${resource}`;

    console.log(result);
}

solve(['http://telerikacademy.com/Courses/Courses/Details/239']);
