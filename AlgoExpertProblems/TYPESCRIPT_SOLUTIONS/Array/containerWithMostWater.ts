function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let maxAmt: number = 0

  while (left < right) {
    let min = Math.min(height[left], height[right])

    let currentAmt = min * (right - left)

    if (maxAmt < currentAmt) maxAmt = currentAmt
    if (min === height[left]) left++
    else right--
  }

  return maxAmt
}
