interface Obj {
  [key: string]: boolean
}

function wordBreak(s: string, wordDict: Array<string>): boolean {
  const obj: Obj = {}

  return wordBreakHelper(s, wordDict, obj)
}

function wordBreakHelper(s: string, wordDict: Array<string>, obj: Obj) {
  if (!s.length) return true
  if (obj[s] !== undefined) return obj[s]

  for (const word of wordDict) {
    // we are finding "word" in "s" from start
    if (s.indexOf(word) === 0) {
      const currentWord = s.slice(word.length)
      const value = wordBreakHelper(currentWord, wordDict, obj)

      obj[s] = value
      if (value) return true
    }
  }

  return false
}
