//객체 생성
function setTodo(node){
    return {
      title: node.innerText,
      isDone: node.isDone || false,
      date: new Date()
    }
  }
  
  //객체 localStorage 저장
  function updateTodo(todoList){
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }
  
  //객체 삭제
  function removeTodo(todoList, node) {
    const index = -1;
    for(let i = 0; i < todoList.length; i++){
      if(todoList[i].date === node.date){
        index = i;
        break;
      }
    }
    if (index !== -1) {
      todoList.splice(index, 1);
    }
  }
  
  // 할일이 담겨 있는 목록
  let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
  let todoListView = null;
  
  window.onload = function(){
    todoListView = document.getElementById("todo-list-view")
    // 모든 dom이 세팅되면 drawTodoList함수를 호출하여 localStorage로부터 받아온 todoList목록 그려주기
    drawTodoList(todoListView, todoList);
  }
  
  function addTodo(ev){
    if(document.getElementById('search-input').value.trim() === ''){
      return;
    }
  
    // 추가할 일정 요소 만들기
    function getTodoNode(){
      // 내가 작성한 일정명 가지고 오기
      const todoTitle = document.getElementById("search-input").value;
  
      // todo요소 만들고 붙여주기
      const todoNode = document.createElement('div');
      todoNode.date = new Date();
      todoNode.innerText = todoTitle;
  
      todoNode.onclick = function() {
        todoNode.isDone = !todoNode.isDone;
        if(this.classList.length === 0){
          this.className = 'done';
        } else {
          this.className = '';
        }
  
        todoList.forEach(function(value){
          if(todoNode.date === value.date){
            value.isDone = todoNode.isDone;
          }
        })
        //localStorage 저장
        updateTodo(todoList);
      }
      // 요소 삭제버튼 만들고 붙여주기
      const removeBtn = document.createElement('button');
      removeBtn.className = "remove-btn";
      removeBtn.innerHTML = '<i class="fa-solid fa-eraser"></i>';
      todoNode.appendChild(removeBtn);
  
      removeBtn.onclick = function() {
        //삭제 후 변경
        removeTodo(todoList, todoNode)
        this.parentNode.remove();
      }
      document.getElementById('search-input').value = '';
  
      todoList.push(setTodo(todoNode));
      //localStorage 저장
      updateTodo(todoList);
  
      return todoNode;
    }
  
    // 엔터키를 입력했다면 해당코드 실행
    if (ev.keyCode === 13 || !ev.keyCode){
      //요소 생성하는 함수 호출
      const todoNode = getTodoNode();
      todoListView.appendChild(todoNode);
    }
  
  }
  function drawTodoList(parent, list) {
    $(parent).empty();
  
    for (let unit of list){
      // todo요소 만들고 붙여주기
      const todoNode = document.createElement('div');
      todoNode.date = unit.date;
      todoNode.innerText = unit.title;
      todoNode.isDone = unit.isDone;
      if (unit.isDone) {
        todoNode.className = 'done'
      }
  
      todoNode.onclick = function(){
        todoNode.isDone = !todoNode.isDone;
        if (this.classList.length === 0){
          this.className = 'done';
        } else {
          this.className = '';
        }
  
        todoList.forEach(function(value){
          if (todoNode.date === value.date) {
            value.isDone = todoNode.isDone;
          }
        })
        //localStorage 저장
        updateTodo(todoList);
      }
  
      //요소 삭제버튼 만들고 붙여주기
      const removeBtn = document.createElement('button');
      removeBtn.className = "remove-btn";
      removeBtn.innerHTML = '<i class="fa-solid fa-eraser"></i>';
      todoNode.appendChild(removeBtn);
  
      removeBtn.onclick = function(){
        this.parentNode.remove();
  
        // 데이터에서 삭제
        // filter메소드 => 배열에서 조건에 맞는 값만 추릴때 사용
        // 특정 자료를 삭제할 때 많이 사용
        todoList = todoList.filter(function(item){
          let itemTime = new Date(item.date).getTime();
          let unitTime = new Date(unit.date).getTime();
  
          return (itemTime !== unitTime);
        })
  
        //삭제 후 객체 변경
        removeTodo(todoList, todoNode);
        //localStorage 저장
        updateTodo(todoList);
      }
  
      todoListView.append(todoNode);
    }
  }
  