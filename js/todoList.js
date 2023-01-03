let todo, newTodo, deleteTodo;
let todoList = [];
while (true) {
    todo = prompt("You can use command 'new', 'list', 'delete', 'quit'", '');
    if (todo === 'new') {
        newTodo = prompt('Enter new todo', '');
        todoList.push(newTodo);
        console.log(`${newTodo} added to list`);
    } else if (todo === 'list') {
        console.log('*********');
        if (todoList.length) {
            for (i = 0; i < todoList.length; i++) {
                console.log(`${i + 1}: ${todoList[i]}`);
            }
        } else {
            console.log('EMPTY TODO');
        }
        console.log('*********');
    } else if (todo === 'delete') {
        deleteTodo = parseInt(prompt('Enter index of todo to delete', ''));
        todoList.splice(deleteTodo - 1, 1);
        console.log('Todo Removed');
    } else if (todo === 'quit') break;
    else {
        alert('Invalid command.');
    }
}
console.log('OK, YOU QUIT THE APP');
