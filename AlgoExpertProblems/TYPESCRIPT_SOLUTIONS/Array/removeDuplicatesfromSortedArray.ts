function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) {
    return nums.length
  }
  let result: number = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[result++] = nums[i]
    }
  }
  return result
}
