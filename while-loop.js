// All numbers between -10 and 19
console.log("All numbers between -10 and 19");
var firstNum = -10;

while(firstNum < 20){
    console.log(firstNum);
    firstNum++;
}

//All even numbers between 10 and 40
console.log("All even numbers between 10 and 40");
var secondNum = 10;

while(secondNum <= 40){
    console.log(secondNum);
    secondNum+=2;
}

//All odd numbers between 300 and 333
console.log("All odd numbers between 300 and 333");
var thirdNum = 300;

while(thirdNum <= 333){
    console.log(thirdNum + 1);
    thirdNum+=2;
}

//All numbers divisible by 5 and 3 between 5 and 50
console.log("All numbers divisible by 5 and 3 between 5 and 50");
var fourthNum = 5;

while(fourthNum <= 50){
    if(fourthNum % 3 === 0 && fourthNum % 5 === 0){
        console.log(fourthNum);
    }
    fourthNum++;
}