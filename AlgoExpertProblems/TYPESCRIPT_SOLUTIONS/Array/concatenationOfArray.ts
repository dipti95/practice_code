// simple solution
function getConcatenation(nums: number[]): number[] {
  const ans: Array<number> = []

  for (const ele of nums) {
    ans.push(ele)
  }

  for (const ele of nums) {
    ans.push(ele)
  }

  return ans
}

// we can do by using spread operator
function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums]
}
