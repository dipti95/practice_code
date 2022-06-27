function hasSingleCycle(array: Array<number>) {
  let len = 0
  let currentIdx = 0

  while (len < array.length) {
    //Below statement means that array have cycle,
    // but all the element of the array is not involved in the cycle
    if (len > 0 && currentIdx === 0) return false
    len++
    currentIdx = getIdx(currentIdx, array)
  }
  return currentIdx === 0
}

function getIdx(idx: number, arr: Array<number>) {
  const nextIdx = (idx + arr[idx]) % arr.length
  if (nextIdx >= 0) return nextIdx
  return nextIdx + arr.length
}
