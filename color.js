//select element to be manipulated
var button = document.querySelector("button");
var body = document.querySelector("body");

//assign event to be carried out
button.addEventListener("click", function(){
    body.classList.toggle("new-bg");
});