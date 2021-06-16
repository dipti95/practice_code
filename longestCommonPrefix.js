function longestCommanPrefix(str){
    let prefix = ''
    if(!str.length) return '';
    let len = Math.min(...str.map(x => x.length))
    for(let i = 0; i < len; i++){
        let char = str[0][i]
        if(str.every(x => x[i] === char)) prefix+= char;
        else break;
    }
    return prefix
}

let str = ['flower','flow','flight'];
console.log(longestCommanPrefix(str))