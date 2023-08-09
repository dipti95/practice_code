var encode = function (strs) {
  let res = ""

  for (const str of strs) {
    res += `${str.length}`
    res += "#"
    res += str
  }
  console.log(res)
  return res
}

var decode = function (s) {
  let arr = []
  let left = 0
  while (left < s.length) {
    let numLen = left
    while (s[numLen] !== "#") {
      numLen++
    }

    let num = Number(s.slice(left, numLen))
    let str = s.slice(numLen + 1, numLen + num + 1)
    arr.push(str)
    left = num + numLen + 1
  }

  return arr
}
