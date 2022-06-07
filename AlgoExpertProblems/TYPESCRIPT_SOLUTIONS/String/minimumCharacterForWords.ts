interface obj {
  [key: string]: number
}
export function minimumCharactersForWords(words: string[]) {
  const arr: Array<string> = []
  const hash: obj = {}
  for (const word of words) {
    getMinimumChar(word, arr, hash)
  }
  for (const [key, val] of Object.entries(hash)) {
    arr.push(key)
  }

  for (const word of words) {
    getResultArr(word, arr)
  }
  return arr
}

function getMinimumChar(word: string, arr: Array<string>, hash: obj) {
  for (const char of word) {
    if (char in hash) hash[char] += 1
    else hash[char] = 1
  }
}

function getResultArr(word: string, arr: Array<string>) {
  let obj: obj = {}
  for (const char of word) {
    if (char in obj) obj[char] += 1
    else obj[char] = 1
  }

  for (const ele of arr) {
    if (ele in obj) obj[ele]--
    else continue
  }

  for (const [key, val] of Object.entries(obj)) {
    if (Math.sign(val) !== -1 && val !== 0) {
      for (let i = val; i > 0; i--) {
        arr.push(key)
      }
    }
  }
}
