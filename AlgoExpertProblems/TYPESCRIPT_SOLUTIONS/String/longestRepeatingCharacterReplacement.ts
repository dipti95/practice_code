function characterReplacement(s: string, k: number): number {
  let hash: { [key: string]: number } = {}

  let result: number = 0
  let left: number = 0
  let right: number = 0
  let maxFrequency: number = 0

  while (right <= s.length - 1) {
    if (s[right] in hash) hash[s[right]] += 1
    else hash[s[right]] = 1

    let len = right - left + 1

    maxFrequency = Math.max(maxFrequency, hash[s[right]])
    let isValid = len - maxFrequency

    if (isValid <= k) {
      result = Math.max(result, len)
      right++
    } else {
      hash[s[left]]--
      left++
      hash[s[right]]--
    }
  }

  return result
}
