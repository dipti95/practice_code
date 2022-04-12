function isValidSequence(array, sequence) {
  let idx = 0

  for (const val of array) {
    if (idx === sequence.length) break
    if (sequence[idx] === val) idx++
  }
  return idx === sequence.length
}
