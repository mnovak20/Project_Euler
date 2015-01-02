var x = "ABBACCAZZ";
var aftsplit = x.split('');
var y = [];

function checker(str){
        var shifted = aftsplit.shift();
        if(y.indexOf(shifted) === -1 && aftsplit.indexOf(shifted) === -1){
           return shifted;
        } else{
            y.push(shifted);
            return checker(aftsplit);
            
        }
}

checker(aftsplit);