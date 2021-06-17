function binarySearch(array, target){
     return binarySearchHelper(array, target, 0, array.length -1)
}

function binarySearchHelper(array, target , left , right){
    while (left <= right){
       let middle = Math.floor((left + right)/2);
       if(array[middle] === target) return middle
       else if(array[middle] > target){
           return binarySearchHelper(array , target, left , middle -1);
       }else {
           return binarySearchHelper(array, target , middle + 1, right)
       }
   }
       return -1
}
 let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
 let target = 33;
 console.log(binarySearch(array , target))


 