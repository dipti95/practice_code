function nextGreaterElement(array) {
  let arr = []
  let maxEle = Math.max(...array)
  for (let i = 0; i < array.length; i++) {
    if (array[i] === maxEle) {
      arr.push(-1)
      continue
    }
    let idx = i + 1
    if (i === array.length - 1) idx = 0
    while (idx !== i) {
      if (array[idx] > array[i]) {
        arr.push(array[idx])
        idx++
        break
      }
      if (idx === array.length - 1) idx = 0
      else idx++
    }
  }
  return arr
}
