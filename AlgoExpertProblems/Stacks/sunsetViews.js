// Given an Array of buildings and direction that all the buildings face,
// return an array of  the indices of buldings that can see the sunset.
// The indices in the output array should be sorted in ascending order.

function sunsetViews(buildings, direction) {
  let stack = []
  let arr = []
  if (direction === "WEST") {
    for (let i = 0; i < buildings.length; i++) {
      if (stack.length === 0) {
        stack.push(buildings[i])
        arr.push(i)
      }
      if (stack[stack.length - 1] < buildings[i]) {
        stack.push(buildings[i])
        arr.push(i)
      }
    }
  } else {
    for (let i = buildings.length - 1; i >= 0; i--) {
      if (stack.length === 0) {
        stack.push(buildings[i])
        arr.push(i)
      }
      if (stack[stack.length - 1] < buildings[i]) {
        stack.push(buildings[i])
        arr.push(i)
      }
    }
    // because this will give us  a non sorted array because it loop starts from backward
    // thats why  .reverse() is using
    arr.reverse()
  }

  return arr
}
// Another way to solve
function sunsetViews(buildings, direction) {
  if (buildings.length === 0) return []
  let arr = []
  if (direction === "EAST") {
    arr = [buildings.length - 1]
    let i = buildings.length - 2
    while (i >= 0) {
      if (buildings[i] > buildings[arr[arr.length - 1]]) {
        arr.push(i)
      }
      i--
    }
    return arr.sort((a, b) => a - b)
  } else {
    arr = [0]
    let i = 1
    while (i < buildings.length) {
      if (buildings[i] > buildings[arr[arr.length - 1]]) {
        arr.push(i)
      }
      i++
    }
    return arr
  }
}
