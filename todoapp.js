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
   let li = document.createElement('li');//create new li element
   li.innerHTML = `
       <lable class="todo-item"  id="p">${todo}</lable>
       <button name="deleteButton" type="submit" style="margin-right: 10px;">delete</button>
       
   `;
   li.classList.add('todo-list-item');//add css class in list element
   ul.appendChild(li);//append or add list element to unordered list item
}

function handleClickDelete(e) {
    if (e.target.name == 'deleteButton')//after the click on button check name of button is deletebutton or not not
        deleteTodo(e);
    /*else if (e.target.name == 'editButton')
    {
       
        editTodo(e);
    }*/
}

function deleteTodo(e) {
    let item = e.target.parentNode;//targeted list item stored in item
    //console.log("show  ",item);
    item.addEventListener('transitionend', function () {
        item.remove(); 
    });

    item.classList.add('todo-list-item-fall');//add css class 
}
                  
function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';//remove all todo list element
}

function editLI()
{

    /*const paragraph = document.getElementById("p");
    //console.log(paragraph);
    const edit_button = document.getElementById("editButton");
    
    if(edit_button.value=="OFF")
    {
        edit_button.value="ON";
        paragraph.contentEditable = true;
        paragraph.style.backgroundColor = "black";
    }
    else if(edit_button.value=="ON")
    {
        edit_button.value="OFF";
        paragraph.contentEditable = false;
        paragraph.style.backgroundColor = "gray";
    }*/

    var items = document.querySelectorAll("#p"),tab = [], liIndex ;
    var edit_button = document.getElementById("editButton");
    var texte=document.getElementById("inpute");
    for(var i = 0; i < items.length; i++)
    {
             tab.push(items[i].innerHTML);
             
    }
    //console.log(tab);
    // get selected li into text fields and get the index
    for(var i = 0; i < items.length; i++)
    {
        //console.log(items[i]);
       items[i].onclick = function()
       {
            
           liIndex = tab.indexOf(this.innerHTML);
            
           if(edit_button.value=="OFF")
            {
               
                var user = prompt("Enter New or Updated Text :", tab[liIndex]);
                //items[liIndex].contentEditable = true;
                items[liIndex].innerHTML=user;
                //items[liIndex].style.backgroundColor = "black";
                edit_button.value="ON";
                
                
            }
            else if(edit_button.value=="ON")
            {
                edit_button.value="OFF";
                //items[liIndex].contentEditable = false;
                //items[liIndex].style.backgroundColor = "gray";
                
            }

        };
        
           
    }
   
}    
    

