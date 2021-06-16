function shortenPath(path){
   // 1test case -path = "/foo/../test/../test/../foo//bar/./baz"
   // UNIX - we want little understanding of unix in this question
    let x = path.split('/').filter(x => x.length > 0 && x !== '.')
    // now we have to cheak that the given path is stated with rootDirectory (/) or not so it only give a boolean value;
    // beacause sometimes path could be like - 2 test case -path = "foo/bar//./baz"   not started with (/)  
    let rootDir = path[0] === '/'   
    //  In 1 test case rootDir is true;
    // In 2 test case rootDir is false
    let stack = []
    if(rootDir) stack.push('')
    // stack == last in first out;
    for(let i = 0; i < x.length; i++){
        if(x[i]=== '..'){
            if(stack.length === 0 || stack[stack.length-1] === '..') stack.push(x[i])
            // this condition is for few test case like if path = "/../../foo"
            //because of that we are checking if last in element of stack is '..' then we have have to push not pop;
            else if(stack[stack.length-1] !== '') stack.pop()
        }else stack.push(x[i])
    }
    if(stack.length === 1 && stack[0] === '') return '/'
    return stack.join('/')
}
