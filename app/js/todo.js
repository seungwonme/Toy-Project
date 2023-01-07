const toDoForm = document.getElementById('todoForm');
const toDoInput = document.querySelector('#todoForm input');
const toDoList = document.getElementById('todoList');

function paintTodo(newTodo) {
    const li = document.createElement("li")
    li.innerText = newTodo;
    toDoList.prepend(li)
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value
    toDoInput.value = ""
    paintTodo(newTodo)
}
toDoForm.addEventListener('submit', handleTodoSubmit);
