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

// O(n)time  , O(1) space
function trap(height: number[]): number {
  let left: number = 0
  let right: number = height.length - 1
  let maxLeft: number = 0
  let maxRight: number = 0
  let result: number = 0

  while (left <= right) {
    maxLeft = Math.max(height[left], maxLeft)
    maxRight = Math.max(height[right], maxRight)
    if (maxRight < maxLeft) {
      let waterTrap = maxRight - height[right]
      if (Math.sign(waterTrap) !== -1) result += waterTrap

      right--
    } else {
      let waterTrap = maxLeft - height[left]
      if (Math.sign(waterTrap) !== -1) result += waterTrap
      left++
    }
  }

  return result
}
