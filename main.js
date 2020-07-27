const readline = require('readline');
const fs = require('fs');

const todos = [];
const interface = readline.createInterface({input: process.stdin, output: process.std})
const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Mark a todo completed.
4. Mark a todo uncompleted.
5. Quit.

`

// function with loop to display and put items in an array

const loadTodos = function() {
    todos.splice(0);
    const file = fs.readFileSync('./todos.csv', 'utf8');
    const rows = file.split('\n');
    for (const rowString of rows) {
        const row = rowString.split(',')
        todos.push(row);
    } 
}


const displayToDo = function(prtNum) {
    console.log('\nMy List')
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const text = todo[0];
        const isComplete === todo[1];
        const num = i + 1;
        let toDoLine = '';
        toDoLine = toDoLine + num + '. '; 
    }

    todoLine = todoLine + text + ' - ';
    if (isComplete === 'complete') {
        todoLine = todoLine + 'yay';
    } else {
        todoLine = todoLine + 'aww'
    }

    console.log(todoLine);
}

const saveToDos = function() {
    const rowStrings = [];
    for (const todo of todos) {
        rowStrings.push(todo[0] + ',' + todo[1]);
    }


function makeToDos(todo) {
    todos.push(todo);
}

const todos = [
    
    
    
];

console.log(todos[1])

function printTodo(todo) {

}


const interface = readline.createInterface({input: process.stdin, output: process.stdout})


const menu = 


interface.question(menu, handleMenu)