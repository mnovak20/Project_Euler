// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// function div(){
// 	var canDiv = false;
// 	var i = 1;
// 	while(!canDiv){
// 		for(var j = 1; j <=20; j++){
// 			if(i%j !== 0){
// 				i++;
// 			}
// 		}
// 	} 
// }



/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/

/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/

var checker = function(){
    for(var i = 1000000; i < 1000000000; i++){
        var result = 0;
        for(var x = 1; x <= 20; x++){
            if(i % x === 0){
                result++;
                if(result > 18){
                console.log(result, i)
              }
            }
            
        }
           
        if(result === 20){
                return i;           
        }
        
    }    
    
}





