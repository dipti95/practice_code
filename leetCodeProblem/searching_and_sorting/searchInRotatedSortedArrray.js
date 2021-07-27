//Given the array nums after the rotation and an integer target,
// return the index of target if it is in nums, or -1 if it is not in nums.


function search(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid + 1;
            } else left = mid - 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            } else right = mid - 1;
        }
    }
    return -1
}