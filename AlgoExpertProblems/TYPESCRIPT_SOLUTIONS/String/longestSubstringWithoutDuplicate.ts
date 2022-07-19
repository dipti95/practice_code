//0(n*n) time

function longestSubstringWithoutDuplication(string: string) {
  let substring: string = ""
  for (let i = 0; i < string.length; i++) {
    let current: string = string[i]
    for (let j = i + 1; j < string.length; j++) {
      if (current.includes(string[j])) break
      current += string[j]
    }
    if (substring.length < current.length) substring = current
  }
  return substring
}
