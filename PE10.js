

//Sieve of Eratosthenes version

var primes = [],
    total = 0;

for (i = 2; i < 2000000; i++) {
    primes[i] = true;
}
for (i = 2; i < primes.length; i++) {
    if (primes[i]) {
        for (x = 2; x * i < primes.length; x++) {
            primes[x * i] = false;
        }
    }
}
for (y = 2; y < primes.length; y++) {
    if (primes[y]) {
        total += y;
    }
}



//brute force

function prime2mm(){
    var isPrime = function(num){
        for(var i = 2; i < num; i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    };
    var result = [];
    var i = 2;
    while(i <= 2000000){
        if(isPrime(i)){
            result.push(i);
        }
        i++;
    }
    console.log(result);
    return result.reduce(function(a,b){
        return a+b;
    }) 
}

 prime2mm();