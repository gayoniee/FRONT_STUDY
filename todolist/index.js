
function addTodo(){
    const todo = document.getElementById("search-input");

    if(todo.value.replace(/ /g, "") === ""){
        return;
    }

    const todoList = document.getElementsByClassName('todo-list')[0];

    const toDoLi = document.createElement('li');
    toDoLi.innerHTML = todo.value;
    todoList.appendChild(toDoLi);
    todo.value = '';

    const removeToDoli = document.createElement('div');
    removeToDoli.className = 'todo-remove-btn';
    removeToDoli.innerHTML = '<i class="fa-solid fa-eraser"></i>';
    toDoLi.appendChild(removeToDoli);
    
}