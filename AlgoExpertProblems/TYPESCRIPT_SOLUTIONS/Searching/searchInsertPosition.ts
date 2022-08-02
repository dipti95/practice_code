function searchInsert(nums: number[], target: number): number {
  if (!nums.length) return 0

  let left: number = 0
  let right: number = nums.length - 1

  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2)

    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else return mid
  }
  return left
}
