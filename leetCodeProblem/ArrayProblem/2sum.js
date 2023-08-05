var twoSum = function (nums, target) {
  let hash = {}
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let match = target - nums[i]

    if (match in hash) {
      result.push(i)
      result.push(hash[match])
      return result
    } else hash[nums[i]] = i
  }

  return result
}
