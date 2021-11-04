function threeSum(nums) {
  nums = nums.sort((a, b) => a - b);

  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return arr;

    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        arr.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (nums[left] + nums[right] + nums[i] > 0) right--;
      else left++;
    }
  }
  return arr;
}
