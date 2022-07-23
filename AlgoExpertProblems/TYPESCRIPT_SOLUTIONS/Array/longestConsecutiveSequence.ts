function longestConsecutive(nums: number[]): number {
  let hash: { [key: number]: boolean } = {}
  let longest: number = 0

  for (const ele of nums) {
    hash[ele] = true
  }

  for (const ele of nums) {
    if (!(ele - 1 in hash)) {
      let current: number = 0

      while (ele + current in hash) {
        current += 1
      }

      longest = Math.max(longest, current)
    }
  }

  return longest
}
