function firstDuplicateValue(array) {
  let value = -1
  let idx = Infinity

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (i !== j && array[i] === array[j] && idx > j) {
        idx = j
        value = array[i]
      }
    }
  }

  return value
}
