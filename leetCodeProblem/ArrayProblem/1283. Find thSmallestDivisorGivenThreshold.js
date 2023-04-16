var smallestDivisor = function (nums, threshold) {
  for (let i = 1; i <= Math.max(...nums); i++) {
    let current = 0
    for (let ele of nums) {
      //console.log(Math.ceil(ele/i))
      current += Math.ceil(ele / i)
    }
    if (current > threshold) continue
    else return i
  }

  return -1
}
