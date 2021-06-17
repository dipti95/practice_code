function balanceBracket(string){
    let stack = [];
    let openBracket = '{[(';
    let closeBracket = '}])';
    let hash = { 
        ')':'(',
        '}':'{',
        ']':'[' 
    }
    for(let i = 0; i < string.length; i++){
        if(openBracket.indexOf(string[i]) !== -1) stack.push(string[i]);
        else if(closeBracket.indexOf(string[i]) !== -1){
            if(stack.length === 0) return false;
            if(hash[string[i]] === stack[stack.length -1]) stack.pop();
            else return false;
        }
    }
    return stack.length === 0
}

let string = "([])(){}(())()()"
console.log(balanceBracket(string))