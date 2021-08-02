// const toggle = document.getElementById("toggle");

// toggle.addEventListener("click", ()=>{

//     if(toggle.innerText === "I do nothing"){
//         toggle.innerText = "Keep pressing nothing will happen";
//     }else{
//         toggle.innerText= "Since you like to click go play Ben's game";
//     }
// });

// or


'use strict';
let count = 0;

let button = document.getElementById('toggle');
let messages = [ "I am a button", "I do nothing", "Keep pressing nothing will happen", "Stop, just stop", "Since you like to click go play Ben's game"];
function go(e){  
    button.innerHTML = messages[count];
    if (count == messages.length -1){  
        count = 0 
    } 
    else{
        count++;
    } 
} button.addEventListener('click', go);


// audio 

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.8;
    audio.play();
  });