function maxSubsetSumNoAdjacent(array: number[]) {
  if (array.length === 0) return 0
  if (array.length === 1) return array[0]

  let first: number = array[0] // i-2;
  let second: number = Math.max(array[0], array[1]) // i-1;

  for (let i = 2; i < array.length; i++) {
    let temp = second

    // maxSum[i]= max(maxSum[i-1] , maxsum[i-2]+array[i])

    second = Math.max(second, first + array[i])
    first = temp
  }

  return second
}
