
var divisors = 0;
var testValArr = [1];

while(divisors < 500){
    valToTest = testValArr[testValArr.length-1] + testValArr.length+1;
    testValArr.push(valToTest)
    var lastVal = Math.sqrt(valToTest);
    for(var i = 1; i <= lastVal; i++){
        if( valToTest % i === 0 ){
            divisors+=2;
        }
    }
    if (lastVal * lastVal == valToTest)
			divisors++;
    if(divisors < 500){
        divisors = 0;
    }else if(divisors >= 500){
        console.log(testValArr[testValArr.length-1]);
        break;
    }

}
