function collatz(num){
 var i = 0;
 while(num > 1){
    if(num%2 === 0){
     num  =  num/2;
    }else{
     num = (num*3)+1;
    }
    i++;
 }
 console.log(num);
 return i;
 
    
}

collatz(100);