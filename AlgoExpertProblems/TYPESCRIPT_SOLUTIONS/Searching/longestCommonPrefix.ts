function longestCommonPrefix(strs: string[]): string {
  if (strs == null || strs.length == 0) return ""
  let l: number = 1
  let r: number = Infinity

  for (const ele of strs) {
    r = Math.min(r, ele.length)
  }

  while (l <= r) {
    let mid: number = Math.floor((l + r) / 2)

    if (checkIfPrefix(strs, mid)) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return strs[0].substr(0, (l + r) / 2)
}

function checkIfPrefix(str: string[], length: number) {
  const res = str[0].substr(0, length)

  for (let i = 1; i < str.length; i++) {
    if (!str[i].startsWith(res)) {
      return false
    }
  }

  return true
}
