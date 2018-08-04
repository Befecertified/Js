//Welcome users to the app
alert('Welcome to guess the number game!');

//save the secret number in a variable
var secretNumber = 7;

//Ask users to guess the secret number and store in a variable
var guessedNumber = prompt('What is the secret number?');

//Check if users got it right
if(guessedNumber < secretNumber){
    alert("Number too low try again!");
} else if (Number(guessedNumber) === secretNumber){
    alert("Yay!");
} else {
    alert("Number too high try again");
}