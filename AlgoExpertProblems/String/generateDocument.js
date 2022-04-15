function generateDocument(characters, document) {
  let obj = {}
  for (const char of characters) {
    if (char in obj) obj[char] += 1
    else obj[char] = 1
  }

  for (const val of document) {
    if (obj[val] === 0) return false
    if (val in obj) obj[val] -= 1
    else return false
  }
  return true
}
