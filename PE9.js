
function pathCheck(){
    var result = [];
    var a,b,iii;
    for(var i = 2; i < 1000; i++){
        for(var ii = 1; ii < i && ii <999; ii++){
            b = i*i;
            a = ii*ii;
            c = a+b;
            iii = Math.sqrt(c)
            if(i+ii+iii === 1000 && i > ii && i < iii){
                result.push(i,ii,iii)
            }
        }        
    }
    console.log(result);
}

pathCheck();

200*375*425;