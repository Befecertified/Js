//declare first function
function isEven(x){
    if(x % 2 === 0){
        return true;
    }
    return false;
}

function isEvenShortVersion(x){
    return x % 2 === 0;
}

//declare second function
var factorial = function(x){
    var result = 1;
    for(var i = 2; i <= x; i++){
        result *= i; 
        // result = result * i;
    }
    return result;
}

//declare third function
var kebabToSnake = function(str){
    var newStr = str.replace(/-/g, "_");
    return newStr;
}