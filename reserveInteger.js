// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 
function reverseInteger(x){
    let string = Math.abs(x).toString();
    let result = ''
    for(let i = string.length - 1; i >=  0; i--){
        result += string[i]
    }
    if(result > Math.pow(2,31)) return 0;
    // given in question 
    return result * Math.sign(x)
    // because we want sign after reversing given in question  ex - below
    //Input: x = -123
    //output: -321
}

// ---------------------
// another way 
function reverseInteger(x){
    let string = Math.abs(x).toString().split('').reverse().join('');
    if(string > Math.pow(2,31)) return 0;
    return string * Math.sign(x)
}

