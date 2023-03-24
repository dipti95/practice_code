function runLengthEncoding(string) {
  let len = 1
  let result = []

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1] && len < 9) len++
    else {
      result.push(len, string[i - 1])
      len = 1
    }
  }
  result.push(len, string[string.length - 1])

  return result.join("")
}
