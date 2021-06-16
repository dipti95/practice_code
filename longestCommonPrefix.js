function longestCommanPrefix(str){
    let prefix = ''
    if(!str.length) return '';
    let len = Math.min(...str.map(x => x.length))
    //str.map(x => x.length)  if we see the given example test case then it (return [6 , 4 , 6])
    //after tha we have to find the min length of string in given str; so, we use Math.min .
    //(...) means we are comparing whole array
    for(let i = 0; i < len; i++){
        let char = str[0][i]
        if(str.every(x => x[i] === char)) prefix+= char;
        else break;
        // break because we have to find the prefix
        // if first letter is not equal then there is no common prefix there
    }
    return prefix
}
//example test case
let str = ['flower','flow','flight'];
console.log(longestCommanPrefix(str))