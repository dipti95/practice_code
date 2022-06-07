function reverseWordsInString(string: string) {
  const arr: Array<string> = string.split(" ")
  const resultArr: Array<string> = []
  for (let i = arr.length - 1; i >= 0; i--) {
    resultArr.push(arr[i])
  }
  return resultArr.join(" ")
}
