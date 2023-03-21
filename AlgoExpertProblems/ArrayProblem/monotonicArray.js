function isMonotonic(array) {
  let increasingOrder = false
  let decresingOrder = false

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) continue
    if (array[i] > array[i + 1]) decresingOrder = true
    if (array[i] < array[i + 1]) increasingOrder = true
  }

  if (increasingOrder && decresingOrder) return false
  return true
}
