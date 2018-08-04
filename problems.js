//Prints the reverse of an array
console.log('//Prints the reverse of an array');
console.log("He has light brain");
function printReverse(x){
	for (var i = x.length - 1; i >= 0; i--){
		console.log(x[i]);
    }
}
printReverse(['He','Has','Light','Brain']);

//Returns true if all elements in an array matches
console.log('//Returns true if all elements in an array matches');
function isUniform(x){
	var first = x[0];
	for(var i = 0; i < x.length; i++){
		var y = x[i];
		if(y !== first){
			return false;
        } 
	}	return true;
}

var uniformity = isUniform([1,2,4,6]);
var uniformity2 = isUniform(['a','a','a']);

console.log("1,2,4,6 = " + uniformity);
console.log("a, a, a = " + uniformity2);

//Takes an array and sum up all digits of the array
console.log("//Takes an array and sum up all digits of the array");
function sumArray(x){
	sum = 0;
	for(var i = 0; i < x.length; i++){
		sum += x[i];
    } return sum;
}

var total = sumArray([1,2,3,4,5]);
console.log("1,2,3,4,5 = " + total);

//Returns the maximum number in an array
console.log('//Returns the maximum number in an array');
function max(x){
    var maximum = x[0];
    for(var i = 0; i < x.length; i++){
		var newNum = x[i];
		if(newNum > maximum){
    		maximum = newNum;    
	} 
   } return maximum;
}

var maximum = max([2,5,200,6,8]);
console.log("2,5,200,6,8 = " + maximum);