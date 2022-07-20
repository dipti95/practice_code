function isSubsequence(s: string, t: string): boolean {
  //O(n*m) time
  if (s.length > t.length) return false
  let idx: number = -1

  for (const char of s) {
    //O(m)
    let found = t.indexOf(char, idx + 1) //O(n)
    if (found === -1) return false
    idx = found
  }

  return true
}
