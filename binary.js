// var num = 32;
// var text = '10101100110011000101101010110110';
// var num = 99;
// var text = '11111111111101111111111111110111111111110111111111111';
// var num = 18;
// var text = '111110111110110100000000000000011111111101011111111000101';
// var num = 3;
// var text = '10';
// var num = 1;
// var text = '1010101010111010101010101';

var result = 0;
var start = 0;
console.log("start......")
for (var i=1; i<=text.length; i++){
    var temp = text.slice(start,i);
    console.log("start,i",start,i);
    console.log("temp",temp);
    console.log("parseInt",parseInt(temp,2));
    if(parseInt(temp,2)>=num){
        result++;
        start = i;
    } 
}
 console.log(result);