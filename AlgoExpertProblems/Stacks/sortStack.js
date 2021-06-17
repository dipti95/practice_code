function sortStack(stack){
    if(stack.length === 0) return stack;
    const popEle = stack.pop()
    sortStack(stack);
    insertPopEle(stack, popEle)
    return stack
}

function insertPopEle(stack , ele){
    if(stack.length === 0 || stack[stack.length -1] <= ele){
        stack.push(ele)
        return;
    }
    const pop = stack.pop();
    insertPopEle(stack,ele)
    stack.push(pop);

}

let stack = [-5, 2, -2, 4, 3, 1]
console.log(sortStack(stack))