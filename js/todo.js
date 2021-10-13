const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input")
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "toDos";

const toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(){
    const li= event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    toDoList.appendChild(li);

    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;

    const button = document.createElement("button");
    li.appendChild(button);
    button.innerText ="❌";
    button.addEventListener("click", deleteTodo);
}

function onWritingToDo(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveTodos();
}

toDoForm.addEventListener("submit", onWritingToDo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(saveTodos) {
    const parseTodos = JSON.parse(savedTodos);
    parseTodos.forEach((item) => console.log("this is the turn of ", item));
}