/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
we can see that the 6th prime is 13.

What is the 10001st prime number?*/



var isPrime = function(num){
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
        return true;
};



function prime10001(){
    var result = [];
    var i = 1;
    while(result.length < 10002){
        if(isPrime(i)){
            result.push(i);
        }
        i++;
    }
    console.log(result[10001]);
}

prime1001();