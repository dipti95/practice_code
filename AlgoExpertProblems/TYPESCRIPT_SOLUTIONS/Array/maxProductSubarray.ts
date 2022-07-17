function maxProduct(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  let product: number = nums[0]
  let min: number = nums[0]
  let max: number = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let temp = max
    max = Math.max(nums[i], nums[i] * max, nums[i] * min)
    min = Math.min(nums[i], nums[i] * min, nums[i] * temp)

    product = Math.max(max, product)
  }

  return product
}
