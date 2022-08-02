function minWindow(s: string, t: string): string {
  if (t === "" || s.length < t.length) return ""

  let hashT: { [key: string]: number } = {}
  let window: { [key: string]: number } = {}

  for (const ele of t) {
    if (ele in hashT) hashT[ele] += 1
    else hashT[ele] = 1
  }

  let have: number = 0
  let need: number = Object.keys(hashT).length
  let result: number[] = [-1, -1]
  let resLen: number = Infinity
  let left: number = 0

  for (let i = 0; i < s.length; i++) {
    let c = s[i]

    if (c in window) window[c] += 1
    else window[c] = 1

    if (c in hashT && window[c] === hashT[c]) {
      have++
    }

    while (have === need) {
      if (i - left + 1 < resLen) {
        result = [left, i]
        resLen = i - left + 1
      }
      window[s[left]] -= 1
      if (s[left] in hashT && window[s[left]] < hashT[s[left]]) {
        have -= 1
      }
      left++
    }
  }
  if (resLen === Infinity) return ""

  return s.slice(result[0], result[1] + 1)
}
