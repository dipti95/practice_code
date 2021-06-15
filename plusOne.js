function plusOne(array){
    for(let i = array.length-1; i >=0; i--){
        array[i]++
        if(array[i] > 9) array[i] = 0;
        else return array
    }
    array.unshift(1);
    return array
}

//----------------------
// Using recursion 
function plusOne(array){
    if(array.length === 0) return [1];
    if(array[array.length-1] === 9) return plusOne(array.slice(0,-1)).concat([0]);
    else return array.slice(0,-1).concat([array[array.length-1] + 1])
}

