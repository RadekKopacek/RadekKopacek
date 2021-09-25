// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
// } else {
//     console.log("YOUR NUMBER IS GREATER (OR EQUAL) THEN 0.5!")
// }
// console.log(random);


// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHhHH I HATE MONDAYS!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS!")
// } else if (dayOfWeek === 'friday') {
//     console.log("patek blazni maji svatek")
// } else {
//     console.log("MEH")
// }

// 0 - 5 - FREE
// 5 - 10 - CHILD $10
// 10 - 65 - ADULT $20
// 65+ - SENIOR $10

// const age = 48;

// if (age < 5) {
//     console.log("You are a baby. You get in for free!")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10!")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20!")
// } else {
//     console.log("You are a senior. You pay $10!")
// }

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! MUST BE 6+ CHARACTERS")
}


