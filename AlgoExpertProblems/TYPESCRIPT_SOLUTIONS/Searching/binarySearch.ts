function binarySearch(array: number[], target: number): number {
  if (!array.length) return -1

  const midIdx = Math.floor(array.length - 1 / 2)

  if (target > array[midIdx])
    return binarySearch(array.slice(midIdx + 1), target)
  else if (target < array[midIdx])
    return binarySearch(array.slice(0, midIdx), target)
  else return midIdx
}
