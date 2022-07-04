function shiftedBinarySearch(array: number[], target: number): number {
  // array is sorted but it is shifted by some amount;
  // lets say we have arr = [1,2,3,4] So,shifted by 1 means arr =[4,1,2,3] , shifted by 2 arr = [3,4,1,2]
  if (!array.length) return -1

  let midIdx: number = Math.floor(array.length - 1 / 2)

  if (array[midIdx] === target) return midIdx
  else if (array[0] < array[midIdx]) {
    if (target < array[midIdx] && target >= array[0])
      return shiftedBinarySearch(array.slice(0, midIdx), target)
    else return shiftedBinarySearch(array.slice(midIdx + 1), target)
  } else {
    if (target > array[midIdx] && target <= array[array.length - 1])
      return shiftedBinarySearch(array.slice(midIdx + 1), target)
    else return shiftedBinarySearch(array.slice(0, midIdx), target)
  }
}
