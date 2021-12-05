function canJump(nums) {
  //if(nums.length === 1 )return true
  let num = 0;
  let i = 0;
  while (i < nums.length) {
    num = Math.max(num, i + nums[i]);

    if (num >= nums.length - 1) {
      return true;
    }

    if (num <= i && nums[i] === 0) {
      return false;
    }

    i++;
  }

  return false;
}
