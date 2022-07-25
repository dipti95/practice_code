// O(n)time  , O(n) space
function trap(height: number[]): number {
  let maxLeft: number[] = [0]
  let maxRight: number[] = []
  maxRight[height.length - 1] = 0

  let result: number = 0

  for (let i = 1; i < height.length; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1])
  }

  for (let i = height.length - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i + 1])
  }

  for (let i = 0; i < height.length; i++) {
    let waterTrap = Math.min(maxLeft[i], maxRight[i]) - height[i]

    if (Math.sign(waterTrap) !== -1) {
      result += waterTrap
    }
  }

  return result
}
