
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?



//very dirty

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

var result = [];
function primesUpTo(target){
    for (var i =1; i< target; i++){
        if(isPrime(i)){
            result.push(i);
        }
    }
    return result;
}

primesUpTo(100000);

var endResult = [];
function checkMod(end){
    for (var j = 0; j < result.length; j++){
        if(end%result[j]===0){
            endResult.push(result[j])
        }
    }
    return endResult;
}

checkMod(600851475143)