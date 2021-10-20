const loginForm = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const Todos = document.querySelector(".todo-form")
const Quote = document.querySelector(".quote")

const NONE = "none";
const USERNAME_KEY = "username";

function onSubmit(event){
    event.preventDefault(); 
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    loginForm.classList.add(NONE);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `안녕하세요 ${username}씨`;
    greeting.classList.remove(NONE);
    Todos.classList.remove(NONE);
    Quote.classList.remove(NONE);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if( savedUsername === null ){
    loginForm.classList.remove(NONE);
    loginForm.addEventListener("submit", onSubmit);
} else {
    paintGreetings();
}