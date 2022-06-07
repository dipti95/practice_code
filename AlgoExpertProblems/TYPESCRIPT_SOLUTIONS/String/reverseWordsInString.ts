function reverseWordsInString(string: string) {
  const arr: Array<string> = string.split(" ")
  const resultArr: Array<string> = []
  for (let i = arr.length - 1; i >= 0; i--) {
    resultArr.push(arr[i])
  }
  return resultArr.join(" ")
}

// without using split or reverse

function reverseWordsInString(string: string) {
  let arr: Array<string> = []
  let char = ""
  let resultArr: Array<string> = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      arr.push(char)
      char = ""
    } else char += string[i]
  }
  arr.push(char)

  for (let i = arr.length - 1; i >= 0; i--) {
    resultArr.push(arr[i])
  }
  return resultArr.join(" ")
}
