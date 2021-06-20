function shiftedBinarySearch(array, target){
    return shiftedBinarySearchHelper(array, target, 0, array.length -1)
}

function shiftedBinarySearchHelper(array, target, left, right) {
    while(left <= right){ 
        let middle = Math.floor((left + right) / 2);
        if(array[middle] ===  target) return middle;
        // the whole array is not sorted hear thats why normal binary search is not
        // used but concept is like that only 

        else if(array[middle] > array[left]){
            if(target < array[middle] && target >= array[left]){
                return shiftedBinarySearchHelper(array, target , left, middle -1)
            }else return shiftedBinarySearchHelper(array, target, middle+1, right);
        }else {
            if(target > array[middle] && target <= array[right]){
                return shiftedBinarySearchHelper(array ,target, middle+1, right);
            }else return shiftedBinarySearchHelper(array, target, left, middle -1)
        }
    }
    
    return -1
}


let array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37]
// if we find hear middle value = 73
// now we should check if middle val is greter than leftVal or not 
// if it is than we use the above condition 
//------------
// but if the given array is like [61,71,72,73,0,1,21,33,37];
// now middle value is 0 and left value is 61 and in this situation 
// 0 - middle val is not greater than left val ;
// means the left side is not sorted,
// so at first we have to go through the right than left 
let target = 33
console.log(shiftedBinarySearch(array, target))