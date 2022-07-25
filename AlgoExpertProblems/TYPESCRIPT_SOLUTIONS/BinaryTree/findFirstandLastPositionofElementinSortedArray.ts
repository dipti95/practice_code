function searchRange(nums: number[], target: number): number[] {
  let left: number = 0
  let right: number = nums.length - 1

  let result: number[] = [-1, -1]

  while (left <= right) {
    let midIdx = Math.floor((left + right) / 2)
    if (nums[midIdx] === target) {
      result[0] = midIdx
      result[1] = midIdx
      break
    } else if (nums[midIdx] > target) {
      right = midIdx - 1
    } else left = midIdx + 1
  }

  while (nums[result[0] - 1] === target) result[0]--
  while (nums[result[1] + 1] === target) result[1]++
  return result
}
