const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
