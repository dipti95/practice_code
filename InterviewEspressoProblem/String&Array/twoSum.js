function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let match = target - nums[i];
    if (match in obj) return [i, nums.indexOf(match)];
    else obj[nums[i]] = 1;
  }
}
