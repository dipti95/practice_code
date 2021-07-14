function findKthLargest(nums, k) {
    helper(0, nums.length - 1, nums)
    return nums[nums.length - k]
};

function helper(start, end, nums) {
    if (start >= end) return;
    let pivIdx = start;
    let left = start;
    let right = end
    while (left <= right) {
        if (nums[left] > nums[pivIdx] && nums[right] < nums[pivIdx])
            swap(left, right, nums)
        else if (nums[left] <= nums[pivIdx]) left++
        else if (nums[right] >= nums[pivIdx]) right--
    }
    swap(pivIdx, right, nums)
    let leftSmallArray = right - 1 - start < end - (right + 1);
    if (leftSmallArray) {
        helper(start, right - 1, nums)
        helper(right + 1, end, nums)
    }
    else {
        helper(right + 1, end, nums)
        helper(start, right - 1, nums)
    }
}

function swap(i, j, array) {
    let ele = array[i];
    array[i] = array[j]
    array[j] = ele
}