//-----------------------
//STRING

function countAndSay(n) {
  if (n === 1) return "1"
  if (n === 2) return "11"
  let str = "11"
  for (let i = 3; i <= n; i++) {
    str += "$"
    let len = str.length
    let count = 1
    let newStr = ""
    let arr = str.split("")
    for (let j = 1; j < len; j++) {
      if (arr[j] !== arr[j - 1]) {
        newStr += count
        newStr += arr[j - 1]
        count = 1
      } else count++
    }
    str = newStr
  }
  return str
}
console.log(countAndSay(7))
