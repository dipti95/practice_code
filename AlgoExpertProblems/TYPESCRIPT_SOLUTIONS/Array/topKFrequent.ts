function topKFrequent(nums: number[], k: number): number[] {
  let hash: { [key: number]: number } = {}

  for (const ele of nums) {
    if (ele in hash) hash[ele] += 1
    else hash[ele] = 1
  }

  let result = []
  let keys = Object.keys(hash)
  console.log(keys)
  keys.sort((a, b) => {
    return hash[a] - hash[b]
  })

  while (result.length < k) {
    result.push(keys.pop())
  }
  return result
}
