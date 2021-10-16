// destructuring from array
const scores = [9949999, 8888888, 777777, 666666, 55555];

const [gold, silver, bronze, ...everyoneElse] = scores;

// destructuring from object
const user = {
    email: 'harvey@gmail.com',
    password: 'sCddfdffas3',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear } = user;

const { city, state, died = 'N/A' } = user2;

// PARAM destructing

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`;
// }

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName})`;
}