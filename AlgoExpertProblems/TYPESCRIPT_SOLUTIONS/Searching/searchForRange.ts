//type Range = [number, number]

function searchForRange(array: number[], target: number) {
  if (!array.length) return [-1, -1]

  let midIdx: number = Math.floor(array.length - 1 / 2)
  if (array[midIdx] === target) {
    let start: number = midIdx
    if (array[midIdx - 1] === target)
      start = searchForRangeHelper(array.slice(0, midIdx), target, "left")
    let end: number = midIdx
    if (array[midIdx + 1] === target)
      end = searchForRangeHelper(array.slice(midIdx + 1), target, "right")

    return [start, end]
  } else if (array[midIdx] > target)
    return searchForRange(array.slice(0, midIdx), target)
  else return searchForRange(array.slice(midIdx + 1), target)
}

function searchForRangeHelper(
  arr: Array<number>,
  target: number,
  side: string
): number {
  if (!arr.length) return -1

  let midIdx: number = Math.floor(arr.length - 1 / 2)
  if (arr[midIdx] > target)
    return searchForRangeHelper(arr.slice(0, midIdx), target, side)
  else if (arr[midIdx] < target)
    return searchForRangeHelper(arr.slice(midIdx + 1), target, side)
  else {
    if (side === "left") {
      if (arr[midIdx - 1] !== target) return midIdx
      else return searchForRangeHelper(arr.slice(0, midIdx), target, side)
    } else {
      if (arr[midIdx + 1] !== target) return midIdx
      else return searchForRangeHelper(arr.slice(midIdx + 1), target, side)
    }
  }
}
