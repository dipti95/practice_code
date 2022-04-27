function mergeSortedArrays(arr1, arr2) {
  if (!arr1.length) return arr2
  if (!arr2.length) return arr1

  const mergeArr = []
  let i = 1
  let j = 1
  let ele1 = arr1[0]
  let ele2 = arr2[0]

  while (ele1 || ele2) {
    if (ele2 === undefined || ele1 <= ele2) {
      mergeArr.push(ele1)
      ele1 = arr1[i]
      i++
    } else {
      mergeArr.push(ele2)
      ele2 = arr2[j]
      j++
    }
  }
  return mergeArr
}

// another solution

function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b)
}

//console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]))
