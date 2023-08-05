var topKFrequent = function (nums, k) {
  let hash = {}
  let res = []
  for (const ele of nums) {
    if (ele in hash) hash[ele] += 1
    else hash[ele] = 1
  }

  let entries = Object.entries(hash)
  let sortedEntries = entries.sort((a, b) => b[1] - a[1])
  let i = 0
  while (k) {
    res.push(sortedEntries[i][0])
    k--
    i++
  }

  return res
}
