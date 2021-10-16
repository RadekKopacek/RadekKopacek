// let nums = [13, 5, 6, 9, 1, 3, 23, 34, 567, 9];

// console.log(Math.max(...nums));
// console.log(Math.min(...nums));
// console.log(...nums);
// console.log(nums);
// console.log(...'hello');

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke',
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }
