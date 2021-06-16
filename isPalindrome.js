var isPalindrome = function(s) {
    let number = '0123456789'
    let newStr = ''
    let x= s.toLowerCase()
    for(let i = 0; i < x.length; i++){
        if(number.indexOf(x[i]) !== -1) newStr += x[i];
        if( x.charCodeAt(i) < 97 || x.charCodeAt(i) > 122 ) continue;
        else newStr += x[i]
    }
     let left = 0;
     let right = newStr.length - 1;
     while(left < right){
         if(newStr[left] === newStr[right]) {
           left ++
           right --
         }else return false
     }
     return true
 };
 let s = "A man, a plan, a canal: Panama";
 console.log(isPalindrome(s))
 