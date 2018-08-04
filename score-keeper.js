//Declare and initialize variable to track first player's score
var playerOneScore = 0;
//Declare and initialize variable to track second player's score
var playerTwoScore = 0;
//Select player one's button
var playerOne = document.querySelector(".player-one");
//Select player two's button
var playerTwo = document.querySelector(".player-two");
//Select the reset button
var resetButton = document.querySelector(".reset");
//Declare and initialize variable for the range of play
var max = 5;
//Select the scores html tag
var scores = document.querySelector("h1");
//Select the range of play html tag
var range = document.getElementsByTagName("h3")[0];
//Select input field
var tracker = document.querySelector(".tracker");

//Display scores on the screen
scores.innerHTML = "<span class='player-one-score'>" + playerOneScore + "</span>" +  " to " + "<span class='player-two-score'>" + playerTwoScore + "</span>";
//Display the range of play on screen
range.innerHTML = "Playing to: " + max;

//Add point to player one when player one button is clicked
playerOne.addEventListener("click", function(){
    if(playerOneScore === max || playerTwoScore === max){
       playerOneScore = playerOneScore;
    } else {
        playerOneScore++;

        //When a new score is added override the current html and display the new html with current score
        scores.innerHTML = "<span class='player-one-score'>" + playerOneScore + "</span>" +  " to " + "<span class='player-two-score'>" + playerTwoScore + "</span>";
    }
    
    //Make maximum score green in color by adding the green-text class
    if(playerOneScore === max){
           document.querySelector(".player-one-score").classList.add("green-text")
    }
})

//Add point to player two when player two button is clicked
playerTwo.addEventListener("click", function(){
    if(playerOneScore === max || playerTwoScore === max){
       playerTwoScore = playerTwoScore; 
    } else {
        playerTwoScore++;

        //When a new score is added override the current html and display the new html with current score
        scores.innerHTML = "<span class='player-one-score'>" + playerOneScore + "</span>" +  " to " + "<span class='player-two-score'>" + playerTwoScore + "</span>";
    }
    
    //Make maximum score green in color by adding the color property of the style property and setting it to green
    if(playerTwoScore === max){
           document.querySelector(".player-two-score").style.color = "green";
    }
})

//Reset scores to 0 for both players when reset button is clicked
resetButton.addEventListener("click", function(){
    //Set variables for both players to 0
    playerOneScore = 0;
    playerTwoScore = 0;
    max = 5;

    //Override all html for players score, setting everything to the new scores
    scores.innerHTML = "<span class='player-one-score'>" + playerOneScore + "</span>" +  " to " + "<span class='player-two-score'>" + playerTwoScore + "</span>";

    //Override html for max range
    range.innerHTML = "Playing to: " + max;
    tracker.value = "";
})

tracker.addEventListener("change", function(){
    //Get value of range of play from text box
    max = Number(this.value);
    //Update the html with new values
    range.innerHTML = "Playing to: " + max;
    //Reset everything if someone touches the box while play is on
    playerOneScore = 0;
    playerTwoScore = 0;
    //Update the html to display the new changes
    scores.innerHTML = "<span class='player-one-score'>" + playerOneScore + "</span>" +  " to " + "<span class='player-two-score'>" + playerTwoScore + "</span>";
})