const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#loginButton");
const greeting = document.querySelector("#greeting");
const loginForm = document.getElementById("login-form")
const nameing = document.getElementById("name");
const image=["css/1.gif","css/2.gif","css/3.gif" ];
const imageselection = document.getElementById("imageselection");
const number = Math.floor(Math.random() * 3);
  imageselection.src = image[number];



