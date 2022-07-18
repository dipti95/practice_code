function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const product1 = nums[0] * nums[1] * nums[2]
  const product2 = nums[0] * nums[1] * nums[nums.length - 1]
  const product3 =
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]

  return Math.max(product1, product2, product3)
}
