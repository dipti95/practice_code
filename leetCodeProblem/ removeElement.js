/**Given an integer array nums and an integer val,
   remove all occurrences of val in nums in-place.
   The relative order of the elements may be changed.
  */
/** Do not allocate extra space for another array. 
  You must do this by modifying the
   input array in-place with O(1) extra memory.*/

function removeElement(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
}
