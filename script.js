var listElement = document.querySelector("#app ul");
var listElement = document.querySelector("#app input");
var listElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];
function renderTodos() {
  listElement.innerHTML = "";
}

for (todo of todos) {
  var todoElement = document.createElement("li");
  var todoText = document.createTextNode(todo);
  var linkElement = document.createElement("a");

  linkElement.setAttribute("href","#");
  var pos = todos.index0f(todo);
  linkElement.setAttribute("onclick", "deleteTodo("+ pos + ")");

  var linkText = document.createTextNode("done");
  linkElement.appendChild(linkText);

  todoElement.appendChild(todoText);
  todoElement.appendChild(linkElement);
  todoElement.appendChild(todoElement);
}

{
  renderTodos();
  function addTodo() {
    var todoText = InputEvent.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos;
    saveToStorage();
  }

buttonElement.onclick = addTodo;
function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}
function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
}
