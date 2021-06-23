/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
**/

function threeSum(nums) {
    let result = [];
    if (nums.length < 3) return result;
    nums = nums.sort((a, b) => a - b);
    let target = 0
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let j = i + 1;
        let k = nums.length - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j + 1]) j++
                while (nums[k] === nums[k - 1]) k--
                j++
                k--
            } else if (sum > target) k--
            else j++
        }
    }
    console.log(result)
    return result
}

let nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))