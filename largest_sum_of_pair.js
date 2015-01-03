var x = [8,9,10,500,10000,10001,20000,10000,50000,49999,10,11,12,13,14,15,16,17,18,19,20];

//largest sum of a pair of numbers in an array. uses var x.
function sumarr (arr){
    var summed = [];
    for(var i = 0; i < x.length-1; i++){
        summed.push(arr[i]+arr[i+1]);
    }
    var ind = summed.indexOf(Math.max.apply(Math,summed));
    return [ind, ind+1];
}