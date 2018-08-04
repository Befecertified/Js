// All numbers between -10 and 19
console.log("All numbers between -10 and 19");

for(var i = -10; i < 20; i++){
   console.log(i);     
}

//All even numbers between 10 and 40
console.log("All even numbers between 10 and 40");

for(var i = 10; i <= 40; i+=2){
   console.log(i);     
}

//All odd numbers between 300 and 333
console.log("All odd numbers between 300 and 333");

for(var i = 300; i <= 333; i++){
    if(i % 2 !== 0){
        console.log(i);
    }     
}

//All numbers divisible by 5 and 3 between 5 and 50
console.log("All numbers divisible by 5 and 3 between 5 and 50");

for(var i = 5; i <= 50; i++){
    if(i % 3 === 0  && i % 5 === 0){
        console.log(i);
    }     
}