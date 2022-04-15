function firstNonRepeatingCharacter(string) {
  let obj = {}
  for (const val of string) {
    if (val in obj) obj[val] += 1
    else obj[val] = 1
  }
  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) return string.indexOf(key)
    else continue
  }
  return -1
}
