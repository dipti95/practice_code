function threeLargestNumber(array){
    let resultArr = [0,0,0];
    for(let i = 0; i < array.length; i++){
        helper(resultArr, array[i])
    }
    return resultArr
}
function helper(array, ele){
    if(array[2] === 0 || ele > array[2]) shift(array,ele, 2);
    else if(array[1] === 0 || ele > array[1]) shift(array,ele,1);
    else if(array[0] === 0 || ele > array[0]) shift(array,ele,0);
}

function shift(array, ele, idx){
    for(let i = 0; i <= idx ; i++){
        if(i === idx) array[i] = ele;
        else array[i] = array[i+1]
    }
}

// let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
// console.log(threeLargestNumber(array))