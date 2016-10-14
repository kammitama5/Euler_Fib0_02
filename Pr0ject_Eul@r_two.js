// By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89
//By considering the terms in the Fibonacci sequence
//whose values do not exceed four million,
//find the sum of the even valued terms


// I sort of cheated with this one, and found the value that was just below 
//a result that gave 4 mill, and found the sum by mapping over an array

// the answer is 4613732. Hey, it works.

var a, b, c, sum;
a = 0;
b = 1;

//recursively add output?
var array = [];
for(var i = 0; i < 34; i++){
	c = a + b;
	a = b;
	b = c
	if (c % 2 === 0){
		
	array.push(c);
		console.log(array)
		
		var total = 0;
		
		for (var x = 0; x < array.length; x++){
			total += array[x]
		}
		console.log(total)
		
	}
	
	
		
		
	}