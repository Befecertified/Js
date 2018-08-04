//select squares and store in a variable
var squares = document.getElementsByClassName("square");
//declare variable and store level of game
var level = 6;
//select rgb text display
var textDisplay = document.querySelector("span#rgb");
//select feedback text display
var feedbackDisplay = document.getElementById("feedback");
//select button
var resetButton = document.querySelector("#reset");
//select h1 tag
var h1 = document.querySelector("h1");
//select level buttons
var levelButton = document.querySelectorAll(".level");
//create an array to store colors
var colors = generateColors(level);
//declare variable and store selected color
var pickedColor = pickColor();
//alter text to show chosen color
textDisplay.textContent = pickedColor;
//add click event listener on level buttons
for (var i = 0; i < levelButton.length; i++){
    levelButton[i].addEventListener("click", function(){
        levelButton[0].classList.remove("selected");
        levelButton[1].classList.remove("selected"); 
        this.classList.add("selected"); 
        this.textContent === "Easy" ? level = 3 : level = 6;
        reset();
    })
}
//add click event listener on reset button
resetButton.addEventListener("click", function(){
    reset();
})

//create function to reset colors
function reset(){
    //generate new colors
    colors = generateColors(level);
    //assign a selected color
    pickedColor = pickColor();
    //assign generated colors to squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].classList.remove("hide");
            squares[i].style.background = colors[i];
        } else {
            squares[i].classList.add("hide");
        }
        
    }
    //display selected color
    textDisplay.textContent = pickedColor;
    //change background color for h1 when a new game begins
    h1.style.background = "dodgerblue";
    //change reset button text 
    resetButton.textContent = "New colors";
    //change feedbackDisplay text
    feedbackDisplay.textContent = "";
}
//iterate through individual squares
for(var i = 0; i < squares.length; i++){
    //change colors of squares
    squares[i].style.background = colors[i];
    //add click event listener to squares
    squares[i].addEventListener("click", function(){
        var selectedColor = this.style.background;
        if(selectedColor === pickedColor){
            //display the text Correct on the feedback tab
            feedbackDisplay.textContent = "Correct!!!";
            resetButton.textContent = "Play again?";
            changeColor(selectedColor);
            h1.style.background = selectedColor;
        } else {
            this.style.background = "#232323";
            //display the text Try again on the feedback tab
            feedbackDisplay.textContent = "Try Again!"
        }
    });
}
//create function to change all background color to match the correctly chosen color
function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
//create function to pick color randomly from the arrays of colors
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
//create function to generate random colors
function generateColors(num){
    //create array to store the randomly generated colors
    var arr = [];
    //generate random colors and store in array
    for (var i = 0; i < num; i++){
        arr.push(randomColors());
    }
    //return the randomly generated colors
    return arr;
}
function randomColors(){
    //generate random value from 0 - 255 for red
    var r = Math.floor(Math.random() * 256);
    //generate random value from 0 - 255 for green
    var g = Math.floor(Math.random() * 256);    
    //generate random value from 0 - 255 for blue
    var b = Math.floor(Math.random() * 256);  
    //store and return the random colors together in a string variable
    var str = "rgb(" + r + ", " + g + ", " + b + ")";  
    return str;
}