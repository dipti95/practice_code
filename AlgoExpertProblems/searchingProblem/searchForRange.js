function searchForRange(array, target){
    let resultArr = [-1,-1];
    searchForRangeHelper(array, target, 0, array.length -1, resultArr , true);
    searchForRangeHelper(array, target, 0, array.length -1, resultArr, false);
    return resultArr
}

function searchForRangeHelper(array, target, left, right, resultArr, goLeft){
    while(left <= right){
        let middle = Math.floor((left + right)/ 2);
        if(array[middle] > target) right = middle -1
        else if(array[middle] < target) left = middle + 1;
        else {
            if(goLeft){
                if(middle === 0 || array[middle -1] !== target){
                    resultArr[0] = middle;
                    return;
                }else right = middle -1
            }else {
                if(middle === array.length -1 || array[middle + 1] !== target){
                    resultArr[1] = middle;
                    return ;
                }else left = middle + 1
            }
        }
    }
}

// let array = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73];
// let target = 45; 
// console.log(searchForRange(array, target))