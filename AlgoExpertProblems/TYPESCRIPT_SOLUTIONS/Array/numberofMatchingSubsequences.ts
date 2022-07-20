function numMatchingSubseq(s: string, words: string[]): number {
  let result: number = 0
  for (const word of words) {
    if (s.length < word.length) continue
    else if (helperMatchingSeq(word, s)) result++
  }

  return result
}

function helperMatchingSeq(word: string, str: string): boolean {
  let idx: number = -1

  for (const char of word) {
    let found = str.indexOf(char, idx + 1)
    if (found === -1) return false
    idx = found
  }

  return true
}
