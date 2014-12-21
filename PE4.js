

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// 906609

function reverse(s){
    return s.split("").reverse().join("");
}

function sortNumber(a,b)
{
return a - b;
}

function checkPal(){
    var Pall = [];
    var string;
    for (var i = 999; i > 1; i--){
		for(var j = 999; j > 1; j--){
            string = (i*j).toString();
            rev = reverse(string)
 			if(string === rev){
 				Pall.push(i*j);
            }
		}
	}
    Pall.sort(sortNumber);
    return Pall;
}

checkPal();

