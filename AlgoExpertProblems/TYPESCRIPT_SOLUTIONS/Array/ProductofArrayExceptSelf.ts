function productExceptSelf(nums: number[]): number[] {
  let pre: number = 1
  let post: number = 1
  let result: number[] = new Array(nums.length).fill(1)

  for (let i = 0; i < nums.length; i++) {
    result[i] *= pre

    pre *= nums[i]
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= post

    post *= nums[i]
  }

  return result
}
