/*The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten 
natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one
 hundred natural numbers and the square of the sum.*/


 var x = function(){
 		var sum1 = 0;
 		var sum2 = 0;

 		for(var i = 1; i <= 100; i++){
 			sum1 += i;
 		}
 		sum1sq = sum1 * sum1;


 		for(var j = 1; j <= 100; j++){
 			sum2 = sum2 + (j*j);
 		}

 		return sum1sq - sum2;

 }