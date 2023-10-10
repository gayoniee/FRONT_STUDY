const todoList = [];

function addTodo(ev){

    if(document.getElementById('search-input').value.trim() === ''){
        return;
    }

    //추가할 일정 요소 만들기
    function getTodoNode(){
        //내가 작성한 일정명 가지고 오기
        const todoTitle = document.getElementById("search-input").value;

        //todo요소 만들고 붙여주기
        const todoNode = document.createElement('div');
        todoNode.innerText = todoTitle;
        todoNode.onclick = function(){
            todoNode.isDone = !todoNode.isDone;
            if(this.classList.length === 0){
                this.className = 'done';
            } else {
                this.className = '';
            }
        }

        //요소 삭제버튼 만들고 붙여주기
        const removeBtn = document.createElement('button');
        removeBtn.className = "remove-btn";
        removeBtn.innerHTML = '<i class="fa-solid fa-eraser"></i>';
        todoNode.appendChild(removeBtn);
        removeBtn.onclick = function(){
            this.parentNode.remove();
        }

        document.getElementById('search-input').value = '';

        return todoNode;
    }

    //엔터키를 입력했다면 해당코드 실행
    if(ev.keyCode === 13 || !ev.keyCode){
    //일정을 보여주는 영역
    const todoListView = document.getElementById("todo-list-view");
    //요소 생성하는 함수 호출
    const todoNode = getTodoNode();
    todoListView.appendChild(todoNode);
    }
}
