function singSong() {
    console.log('DO');
    console.log('RE');
    console.log('MI');
}

// singSong();

function rant(message) {
    for (let i = 1; i <= 3; i++) {
        console.log(message.toUpperCase());
    }
}

// rant('bla bla bal');

function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName[0]}.`)
}

// greet('Sam', 'Hawkins');

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

// repeat('cats ', 20);

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}