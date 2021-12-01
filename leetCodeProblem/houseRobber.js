/*  At index [i], 
you only need to know the 
maximum profit at [i - 1] and [i - 2]. 
This is a slight variation on fibonacci.
*/

function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // Example 1: nums = [1, 2, 3, 1, 2]

  let maxAtTwoBefore = nums[0]; // 1

  //        2                      1         2
  let maxAtOneBefore = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    // interation 1

    //         4                  nums[2] = 3 + 1 = 4              2
    let currentMax = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
    maxAtTwoBefore = maxAtOneBefore; //2
    maxAtOneBefore = currentMax; //4

    // interation 2

    //            4                  nums[3] = 1 + 2 = 3              4
    // const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

    // maxAtTwoBefore = maxAtOneBefore;   4
    // maxAtOneBefore = maxAtCurrent;   3

    // interation 3

    //            4                  nums[4] = 2 + 4 = 6              3
    // const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

    // maxAtTwoBefore = maxAtOneBefore;   3
    // maxAtOneBefore = maxAtCurrent;   6
  }
  return maxAtOneBefore;
}
