function binarySearch(array: number[], target: number): number {
  if (!array.length) return -1

  const midIdx = Math.floor(array.length - 1 / 2)

  if (target > array[midIdx])
    return binarySearch(array.slice(midIdx + 1), target)
  else if (target < array[midIdx])
    return binarySearch(array.slice(0, midIdx), target)
  else return midIdx
}

//  Better solution
function search(nums: number[], target: number): number {
  let left: number = 0
  let right: number = nums.length - 1

  while (left <= right) {
    let middleIdx: number = Math.floor((left + right) / 2)

    if (nums[middleIdx] > target) {
      right = middleIdx - 1
    } else if (nums[middleIdx] < target) {
      left = middleIdx + 1
    } else {
      return middleIdx
    }
  }

  return -1
}
