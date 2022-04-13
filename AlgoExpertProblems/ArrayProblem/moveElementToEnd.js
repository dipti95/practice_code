function moveElementToEnd(array, toMove) {
  for (let i = 1; i < array.length; i++) {
    let idx = i
    console.log(array[idx])

    while (array[idx] !== toMove && idx !== 0) {
      swap(idx, idx - 1, array)
      idx--
    }
  }
  //console.log(array)
  return array
}

function swap(i, j, array) {
  let ele = array[i]
  array[i] = array[j]
  array[j] = ele
}
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))
