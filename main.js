const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const addButton = document.querySelector('#add');
const todoInput = document.querySelector('#todo-input');

console.log(todoInput);

//Реализация placeholder
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

function formHandler(event) {
    const taskText = todoInput.innerText; // Получаем значение введенное в Input поле 
    if (todoInput.innerText=='Введите название задачи') {
      console.log(1);
    }else{
     
    const newTask = document.createElement('li'); // Создаем тег li с помощью создания элемента
    //     //Создаем кнопку удалить
    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('role', 'button');
    // deleteBtn.classList.add('btnDel');
    // deleteBtn.innerText = 'o';

        //Создаем кнопку удалить
    const deleteBtn = document.createElement('div');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.classList.add('btnDel');



    newTask.append(deleteBtn);

    newTask.append(taskText); //Вставляем значение полученные из инпут поля
    deleteBtn.addEventListener('click', deleteTask) //вешаем функцию удаления по клику на кнопку Х
    
    console.log('uuu');
    if (taskText !== "") {
    todoList.insertAdjacentElement('afterbegin', newTask); //Добавляем элемент на страницу
    todoInput.innerText=''; // очищаем поле ввода
    todoInput.focus();} //оставляем поле ввода активным
  }
};


function deleteTask() {
  this.closest('li').remove();/* через this обращаемся к объекту, на котором висит функция (кнопка x).
  через closets ищим ближайший родительский элемент у этого объекта (для кнопки x - тег li с текстом таски),
  удаляем этот элемент */
}

//Реализация кнопки "Центр"
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

//создание задачи по клавише Enter
todoInput.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
      formHandler();
    }
  })
