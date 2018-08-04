//Ask user question
var ques = prompt("Are we there yet?");

//Right answers
// var rightAnswer1 = "yes";
// var rightAnswer2 = "yeah";
// rightAnswer1 || ques != rightAnswer2

//Annoy them till they provide right answer
while(ques.indexOf("yes") === -1 && ques.indexOf("yeah") === -1 ){
   var ques = prompt("Are we there yet?");  
}

alert('Yes we are!');
