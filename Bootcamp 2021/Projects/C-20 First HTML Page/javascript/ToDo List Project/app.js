// by RK

// const todoList = [];
// let newTask = null;
// let input = undefined;

// while (input !== 'quit') {
//     input = prompt("What do you want to do?");

//     if (input === 'new') {
//         newTask = prompt("Enter new todo:");
//         console.log(`${newTask} has been added to the list!`);
//         todoList.push(newTask);
//     } else if (input === 'list') {
//         console.log("*****************");
//         for (i = 0; i < todoList.length; i++) {
//             console.log(i, todoList[i]);
//         }
//         console.log("*****************");
//     } else if (input === 'delete') {
//         input = prompt("Enter index of todo to delete:");
//         todoList.splice(input, 1);
//         console.log("todo removed!")
//     }
// }

// console.log("OK, you are quit")

// by the course

let input = prompt('What would you like to do?');
const todos = [];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('****************');
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter the index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log('Ok, deleted ${deleted[0]}');
        } else {
            console.log('Unknown index!');
        }
    }
    input = prompt('What would you like to do?');
}
console.log('OK QUIT THE APP!');


