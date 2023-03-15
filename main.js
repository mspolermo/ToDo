const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const addButton = document.querySelector('#add');
const todoInput = document.querySelector('#todo-input');

const placeholder = todoInput.getAttribute('data-placeholder');

todoInput.innerHTML === '' && (todoInput.innerHTML = placeholder);

todoInput.addEventListener('focus', function (e) {
    const value = e.target.innerHTML;
    value === placeholder && (e.target.innerHTML = '');
});
todoInput.addEventListener('blur', function (e) {
    const value = e.target.innerHTML;
    value === '' && (e.target.innerHTML = placeholder);
});

addButton.addEventListener('click', formHandler);

const btnCener = document.querySelector('#btnCenter')
const todo = document.querySelector('#simple-todo')
let counter = 0;
btnCener.addEventListener('click', function(){
  counter++;
  todo.classList.add('center');
  if (counter>1) {
    todo.classList.remove('center');
    counter=0;
  }
});

todoInput.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
      event.preventDefault();
      formHandler();
    };
  });

function formHandler(event) {
    const taskText = todoInput.innerText; 
    if (todoInput.innerText=='Введите название задачи') {
    }else{
     
    const newTask = document.createElement('li');

    const deleteBtn = document.createElement('div');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.classList.add('btnDel');

    newTask.append(deleteBtn);
    newTask.append(taskText); 

    deleteBtn.addEventListener('click', deleteTask)
    
    if (taskText !== "") {
      todoList.insertAdjacentElement('afterbegin', newTask); 
      todoInput.innerText=''; 
      todoInput.focus();
    };
  };
};

function deleteTask() {
  this.closest('li').remove();
};  