const toggle = document.getElementById("toggle");

toggle.addEventListener("click", ()=>{

    if(toggle.innerText === "I do nothing"){
        toggle.innerText = "Keep pressing nothing will happen";
    }else{
        toggle.innerText= "Since you like to click go play Ben's game";
    }
});