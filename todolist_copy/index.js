function addTodo(){
    const todo = document.getElementById("search-input");
    
    if(todo.value === ''){
        return;
    }

    const todoListUl = document.getElementsByClassName('todo-list')[0];
    const toDoLi = document.createElement('li');
    toDoLi.innerHTML = todo.value;
    todoListUl.appendChild(toDoLi);
    todo.value = '';

    const removeToDoLi = document.createElement('div');
    removeToDoLi.className = 'todo-remove-btn';
    removeToDoLi.innerHTML = '<i class="fa-solid fa-eraser"></i>';
    toDoLi.appendChild(removeToDoLi);

    removeToDoLi.onclick = function(ev){
        
    }
}
