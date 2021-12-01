function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let maxAtTwoBefore = nums[0];
  let maxAtOneBefore = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let currentMax = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
    maxAtTwoBefore = maxAtOneBefore;
    maxAtOneBefore = currentMax;
  }
  return maxAtOneBefore;
}
