var findMin = function (nums) {
  let result = +Infinity

  let left = 0
  let right = nums.length - 1

  while (left < right) {
    if (nums[left] < nums[right]) {
      result = Math.min(result, nums[left])
      return result
    }

    let midIdx = Math.floor((left + right) / 2)
    result = Math.min(result, nums[midIdx])

    if (nums[midIdx] >= nums[left]) {
      left = midIdx + 1
    } else right = midIdx - 1
  }

  return result
}
