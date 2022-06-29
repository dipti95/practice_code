interface Obj {
  [key: number]: Array<Array<string>>
}

function wordBreak(s: string, wordDict: Array<string>): Array<string> {
  const obj: Obj = {}

  let result = wordBreakHelper(s, wordDict, 0, obj)
  return result.map((ele) => ele.join(" "))
}

function wordBreakHelper(
  s: string,
  wordDict: Array<string>,
  start: number,
  obj: Obj
) {
  if (start > s.length - 1) return [[]]
  if (obj[start] !== undefined) return obj[start]

  let resultArr: Array<Array<string>> = []

  for (let i = start; i < s.length; i++) {
    let currentEle = s.slice(start, i + 1)
    if (wordDict.includes(currentEle)) {
      let values = wordBreakHelper(s, wordDict, i + 1, obj)

      for (const ele of values) {
        resultArr.push([currentEle, ...ele])
      }
    }
  }

  return (obj[start] = resultArr)
}
