// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDelete);
document.getElementById('clearAll').addEventListener('click', handleClearAll);
// Event Handlers
function handleSubmitForm(e) {
   e.preventDefault();
   let input = document.querySelector('input');
   if (input.value != '')
       addTodo(input.value);
   input.value = '';
}
// Helpers
function addTodo(todo) {
   let ul = document.querySelector('ul');
   let li = document.createElement('li');
   li.innerHTML = `
       <span class="todo-item">${todo}</span>
       <button name="deleteButton" type="submit"><img class="add" src="delete.png"></img></button>
   `;
   li.classList.add('todo-list-item');
   ul.appendChild(li);
}

function handleClickDelete(e) {
    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    
    item.addEventListener('transitionend', function () {
        item.remove(); 
    });

    item.classList.add('todo-list-item-fall');
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}
