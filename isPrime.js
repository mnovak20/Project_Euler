// check if number is Prime;

var isPrime = function(num){
    
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
        return true;
};

//isPrime(7918);