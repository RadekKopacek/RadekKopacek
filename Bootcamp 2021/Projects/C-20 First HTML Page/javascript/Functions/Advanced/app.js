// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch();

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIIIII';
// }

// console.log(radius);
// console.log(msg);

// function bankRobbery() {
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];
//     function cryForHelp() {
//         function inner() {
//             for (let hero of heroes) {
//                 console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
//             }
//         }
//         inner();
//     }
//     cryForHelp();
// }

// const add = function (x, y) {
//     return x + y;
// }

// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);


// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log('CONGRATS, I AM A GOOD FUNCTION!');
//             console.log('YOU WIN A MILLION DOLLARS!!');
//         }
//     } else {
//         return function () {
//             alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!');
//             alert('STOP TRYING TO CLOSE THIS WINDOW!');
//             alert('STOP TRYING TO CLOSE THIS WINDOW!');
//             alert('STOP TRYING TO CLOSE THIS WINDOW!');
//             alert('STOP TRYING TO CLOSE THIS WINDOW!');
//         }
//     }
// }

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }

// }

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }

// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOW MEOW MEOW`)
    }
}