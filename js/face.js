const face = document.querySelectorAll("i");

const greet = document.getElementById("nickname");
const faceexpression = ["Why are you angry?", "Happy day~", "I'm sad :(", "Falling in Love!"];

face[0].addEventListener("click", clickface0);
face[1].addEventListener("click", clickface1);
face[2].addEventListener("click", clickface2);
face[3].addEventListener("click", clickface3);



function clickface0(){
    greet.innerText =  `${faceexpression[0]}`;
}  

function clickface1(){
    greet.innerText =  `${faceexpression[1]}`;
   
}

function clickface2(){
    greet.innerText =  `${faceexpression[2]}`;
   
}

function clickface3(){
    greet.innerText =  `${faceexpression[3]}`;
  
}

