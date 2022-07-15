function groupAnagrams(strs: string[]): string[][] {
  let hash: { [key: string]: string[] } = {}
  for (let i = 0; i < strs.length; i++) {
    let seq = wordSequence(strs[i])
    if (seq in hash) hash[seq].push(strs[i])
    else hash[seq] = [strs[i]]
  }

  return Object.values(hash)
}

let alpha = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
}
function wordSequence(str: string): string {
  let arr = new Array(26).fill(0)

  for (const char of str) {
    arr[alpha[char]]++
  }

  return arr.toString()
}
