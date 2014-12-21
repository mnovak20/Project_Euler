


process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
process.stdin.on('data', function (chunk) {
    var sp = chunk.split(" ");
    var fix = sp[sp.length-1].split("");
    fix.pop();
    var x = fix.join('');
    sp[sp.length-1] = x;
    var res = [];
    
    var checkFunc = function(){
        var test = sp.splice(0,1).toString();
        if(res.length === 0){
            res.push(test);
            res[1] = 1;
        }else if(res.indexOf(test)===-1){
            res.push(test);
            res[res.length] = 1;
            
        }else if(res.indexOf(test)>-1){
            res[res.indexOf(test)+1] = res[res.indexOf(test)+1]+1;
        }
     if(sp.length>0){
        checkFunc();   
     }        
        
       
    };
    
     if(sp.length>0){
        checkFunc();   
     }
        
         
    while(res.length>0){
        console.log(res.splice(0,2).join(' '))
    }
});
