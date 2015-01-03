var x = [8,9,10,500,10000,10001,20000,10000,50000,49999,10,11,12,13,14,15,16,17,18,19,20];

//largest increasing subsequence. uses var x.
function subseq(arr){
    var result = 0,resulti=0;
    var temp = 0;
    for(var i = 0; i < arr.length; i++){
        if(x[i] < x[i+1]){
            temp++;
            if(temp> result){
                result = temp;
                resulti = i;
            }
        }
        else{temp = 0;}
    }
     console.log(resulti+1-result,resulti+1);
}
