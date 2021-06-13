var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
       if(nums[i] === nums[i+1]) {
           nums.splice(i,1)
           console.log(nums)
           i--
       }
    }
 };