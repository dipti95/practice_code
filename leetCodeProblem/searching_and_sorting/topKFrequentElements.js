function topFrequent(nums, k) {
    let hash = {}
    if (nums.length === k) return nums;
    for (const num of nums) {
        if (num in hash) hash[num] += 1
        else hash[num] = 1
    }

    let key = Object.keys(hash)

    if (key.length === k) return key;
    helper(0, key.length - 1, key, hash)


    return key.slice(key.length - k)
}

function helper(start, end, nums, hash) {
    if (start >= end) return;
    let pivIdx = start;
    let left = start;
    let right = end;
    while (left <= right) {
        if (hash[nums[left]] > hash[nums[pivIdx]] && hash[nums[right]] < hash[nums[pivIdx]])
            swap(left, right, nums)
        else if (hash[nums[left]] <= hash[nums[pivIdx]]) left++
        else if (hash[nums[right]] >= hash[nums[pivIdx]]) right--
    }
    swap(pivIdx, right, nums)

    let leftSmallArray = right - 1 - start < end - (right + 1)
    if (leftSmallArray) {
        helper(start, right - 1, nums, hash)
        helper(right + 1, end, nums, hash)
    } else {
        helper(right + 1, end, nums, hash)
        helper(start, right - 1, nums, hash)
    }
}

function swap(i, j, array) {
    let ele = array[i]
    array[i] = array[j]
    array[j] = ele
}

let nums = [1, 1, 1, 2, 2, 3]
let k = 2

console.log(topFrequent(nums, k))