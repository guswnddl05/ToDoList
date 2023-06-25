const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
  li.remove();
}

function paintToDo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  list.appendChild(span);
  list.appendChild(button);
  toDoList.appendChild(list);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function getShow() {
  const tdlist = document.getElementById("todo-list");

  if (tdlist.style.display === "none" || tdlist.style.display === "") {
    tdlist.style.display = "block";
  } else {
    tdlist.style.display = "none";
  }
}
document
  .querySelector(".collapsible-header")
  .addEventListener("click", getShow);

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null && savedToDos !== "") {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
