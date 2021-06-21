function quickSort(array){
    helper(array, 0, array.length -1)
    return array;
}

function helper(array , start , end){
   if(start >= end) return ;
   let pivIdx = start;
   let left = start;
   let right = end;
   while(left <= right){
       if(array[left] > array[pivIdx] && array[right] < array[pivIdx]) swap(left , right , array);
       else if(array[left] <= array[pivIdx]) left ++;
       else if(array[right] >= array[pivIdx]) right --;
   }   
   swap(pivIdx, right, array)
   let leftArraySmall = right -1 - start < end -( right + 1)
   if(leftArraySmall){
       helper(array,start,right -1);
       helper(array,right + 1, end);
   }else{
       helper(array,right +1, end);
       helper(array,start, right -1);
   }
}

function swap(i, j, array){
    let ele = array[i];
    array[i] = array[j];
    array[j] = ele
}


// let array = [8,5,2,9,7,6,3];
// console.log(quickSort(array))