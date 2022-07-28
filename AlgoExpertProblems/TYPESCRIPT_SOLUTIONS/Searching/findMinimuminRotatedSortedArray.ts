function findMin(nums: number[]): number {
  let left: number = 0
  let right: number = nums.length - 1
  let result: number = nums[0]

  while (left <= right) {
    if (nums[left] < nums[right]) {
      result = Math.min(result, nums[left])
      break
    }

    let midIdx = Math.floor((left + right) / 2)
    result = Math.min(result, nums[midIdx])
    if (nums[left] <= nums[midIdx]) {
      left = midIdx + 1
    } else right = midIdx - 1
  }

  return result
}
