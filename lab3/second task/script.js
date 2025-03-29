const input = document.querySelector("input");
const addButton = document.getElementById("input-button");
const todos = document.getElementById("todo-list");
const noContent = document.getElementById("no-content");

// чтение данных о задачах из локального хранилища или создание пустого массива, если данных нет
let todosJson = JSON.parse(localStorage.getItem("todos")) || [];

// oтображение задач при загрузке страницы
showTodos();

// функция для создания и возврата HTML-разметки для каждой задачи в ту-ду листе
function getTodoHtml(item, index) {
    
    let checked = item.status == "done" ? "checked" : ""; // установка "checked", если задача выполнена
    return `
    <li class="todo">
      <label for="${index}">
        <input id="${index}" onclick="check(this)" type="checkbox" ${checked}>
        <p class="${checked}">${item.name}</p>
      </label>
      <button class="delete" data-index="${index}" onclick="remove(this)"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="80" y1="112" x2="432" y2="112" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="256" y1="176" x2="256" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="184" y1="176" x2="192" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="328" y1="176" x2="320" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg></button>
    </li>
  `;
}

// функция для отображения задач на экране
function showTodos() {
    
    if (todosJson.length == 0) {
        todos.innerHTML = ""; // очистка списка задач
        noContent.style.display = 'flex'; // отображение "you don't have any tasks yet", если задач нет
    } 
    else {
        todos.innerHTML = todosJson.map(getTodoHtml).join(''); // преобразует список задач в HTML и обновляет отображение этих задач на веб-странице
        noContent.style.display = 'none'; // скрываем "you don't have any tasks yet"
    }
}

// обработчик нажатия клавиши в поле ввода (enter)
input.addEventListener("keyup", e => {

    let todo = input.value.trim(); // обрабатываем текст и убираем пробелы 

    if (!todo || e.key != "Enter") { // если поле пустое или не нажата клавиша enter
        return; // сворачиваемся / прекращаем выполнение функции
    }

    addTodo(todo); // добавляем новую задачу в список 
});

// обработчик клика по кнопке добавления задачи
addButton.addEventListener("click", () => {

    let todo = input.value.trim(); // обрабатываем текст и убираем пробелы 

    if (!todo) {
        return; // сворачиваем, если поле пустое и ничего не введено 
    }

    addTodo(todo); // добавляем новую задачу в список 
});

// функция добавления новой задачи
function addTodo(todo) {

    input.value = ""; // очистка поля ввода

    todosJson.unshift({ name: todo, status: 'active' }); // добавляем задачу в начало массива

    localStorage.setItem("todos", JSON.stringify(todosJson)); // сохраняем в локальное хранилище 

    showTodos(); // апдейтим и отображаем в списке задач

}

// функция для отметки задачи как выполненной или невыполненной
function check(todo) {

    let todoName = todo.parentElement.lastElementChild; // получаем элемент с текстом задачи

    if (todo.checked) {
        todoName.classList.add("checked"); // отмечаем как выполнено 
        todosJson[todo.id].status = "completed"; // апдейтим статус в массиве
    } 
    else {
        todoName.classList.remove("checked"); // или удаляем из списка / удаляем 'checked', обозначающий выполненную задачу
        todosJson[todo.id].status = "pending"; // апдейтим статус в массиве
    }
    localStorage.setItem("todos", JSON.stringify(todosJson)); // сохраняем в локальное хранилище 
}

// функция для удаления задачи 
function remove(todo) {

    const index = todo.dataset.index; // получает индекс задачи, которую нужно удалить
    
    todosJson.splice(index, 1); // удаляет из самого массива
    
    showTodos(); // апдейтим список задач (отображение)
    
    localStorage.setItem("todos", JSON.stringify(todosJson)); // сохраняем в локальное хранилище 
}