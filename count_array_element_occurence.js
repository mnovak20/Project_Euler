//count number of times each item occurs. uses var j
var j = [1,2,3,10,11,1,2,3,3,4,10,10,10,100];

function counter(arr){
    var result = [];
    for(var i = 0; i < j.length; i++){
        var count = 0;
        for(var k = 0; k < j.length; k++){
            if(j[i] === j[k]){
                count++;
            }
        }
        result.indexOf(j[i]+":"+count) === -1 ? result.push(j[i]+":"+count):0;
    }
    return result;
}

// counter(j);