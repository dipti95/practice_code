var longestConsecutive = function (nums) {
  let hash = {}
  for (const ele of nums) {
    if (ele in hash) continue
    else hash[ele] = true
  }

  let longest = 0
  let max = 0

  for (const ele of nums) {
    let num = ele
    if (num - 1 in hash) continue
    max = 1
    while (num + 1 in hash) {
      num++
      max++
    }

    longest = Math.max(max, longest)
  }
  longest = Math.max(max, longest)
  return longest
}
