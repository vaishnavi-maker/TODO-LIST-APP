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
       <button name="deleteButton" type="submit" style="margin-right: 10px;"><img class="add" src="delete.png"></img></button>
       <!--<button name="editButton" style="margin-right: 10px; "><img class="add" src="edit.png"></img></button>-->
   `;
   li.classList.add('todo-list-item');//add css class in list element
   ul.appendChild(li);//append or add list element to unordered list item
}

function handleClickDelete(e) {
    if (e.target.name == 'deleteButton')//after the click on button check name of button is deletebutton or not not
        deleteTodo(e);
   /* if(e.target.name == 'editButton')  
    {
        editTodo(e);
    }  */
}

/*function editTodo(e)
{
   // let item = e.target.parentNode;
    //var name = this.parentElement.getAttribute("")
    document.getElementById("inpute").value = "gy";
}*/
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
