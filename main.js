const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault(); // Отменяем стандартное поведение кнопки Submit (обновление страницы)
    const taskText = todoInput.value; // Получаем значение введенное в Input поле
    const newTask = document.createElement('li'); // Создаем тег li с помощью создания элемента
    
        //Создаем кнопку удалить
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.classList.add('btnDel');
    deleteBtn.innerText = 'o';

    newTask.append(deleteBtn);
    newTask.append(taskText); //Вставляем значение полученные из инпут поля
    deleteBtn.addEventListener('click', deleteTask) //вешаем функцию удаления по клику на кнопку Х
    
    
    todoList.append(newTask); //Добавляем элемент на страницу
    todoInput.value=''; // очищаем поле ввода
    todoInput.focus(); //оставляем поле ввода активным

}

function deleteTask() {
  this.closest('li').remove();/* через this обращаемся к объекту, на котором висит функция (кнопка x).
  через closets ищим ближайший родительский элемент у этого объекта (для кнопки x - тег li с текстом таски),
  удаляем этот элемент */
}
