let btn = document.querySelector("#btn");
let feedback = document.querySelector("#time");
let time = 60;
let count = 0;

let timer = setInterval(() => {
  if (time == 0) {
    clearInterval(timer);
    feedback.textContent = "Wow, you clicked the button " + count + " times!";
    btn.disabled = true;
    return;
  }
  feedback.textContent = --time;
}, 100);

btn.addEventListener("click", () => {
  btn.textContent = "Clicked " + ++count;
});




