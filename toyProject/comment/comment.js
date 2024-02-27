const form = document.querySelector('form')
const usernameInput = form.elements.username
const commentInput = form.elements.comment
const ul = document.querySelector('ul')

form.addEventListener('submit',function (event) {
    event.preventDefault();
    createCommnd();
    usernameInput.value = '';
    commentInput.value = '';
})
const createCommnd = function(){
    const bold = document.createElement('b');
    const li = document.createElement('li');
    li.innerText = commentInput.value;
    bold.innerText = `${usernameInput.value} - `;
    li.prepend(bold)
    ul.append(li)
}