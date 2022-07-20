function numberOfPairs(nums: number[]): number[] {
  let hash: { [key: number]: number } = {}
  let result: number[] = [0, 0]

  for (const ele of nums) {
    if (ele in hash) hash[ele] += 1
    else hash[ele] = 1
  }

  for (const [key, value] of Object.entries(hash)) {
    if (value % 2 === 0) result[0] += value / 2
    else if (value % 2 !== 0 && value > 2) {
      result[0] += Math.floor(value / 2)
      result[1] += value - Math.floor(value / 2) * 2
    } else result[1] += value
  }

  return result
}
