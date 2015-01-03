
//bubblesort

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9,1,1000];

function bubblesort(arr){
    var temp;
    var okpairs = 0;
    for(var i = 0; i < a.length; i++){
        if(a[i]>a[i+1]){
            temp = a[i+1];
            a[i+1] = a[i];
            a[i] = temp;
        }else(okpairs++);
        
    }
    okpairs === a.length ? console.log(a) : bubblesort(a);
    
}


// bubblesort(a);