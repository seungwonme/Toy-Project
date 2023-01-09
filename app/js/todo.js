const todoForm = document.getElementById('todoForm');
const todoInput = todoForm.elements.todo;
const todoContainer = document.getElementById('todoList');

const TODOS_KEY = 'todos';

let todos = [];

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null ){
    const parsedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
    todos = parsedTodos
    parsedTodos.forEach(paintTodo);
}

/** #todoList>li>span+button */
function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.addEventListener('click', deleteTodo);
    button.innerText = '❌';
    li.append(span, button);
    todoContainer.appendChild(li);
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== Number(li.id));
    saveTodos();
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text:todoInput.value,
        id:Date.now()
    }
    todoInput.value = '';
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}
todoForm.addEventListener('submit', handleTodoSubmit);