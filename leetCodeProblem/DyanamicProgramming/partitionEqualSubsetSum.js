function canPartition(nums) {
  let sum = 0;
  for (let ele of nums) {
    sum += ele;
  }
  if (sum % 2 !== 0) return false;
  let half = sum / 2;
  let dp = [];

  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    for (let j = half; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[half] || false;
}
