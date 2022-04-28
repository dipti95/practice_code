//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  let arr = []
  for (const ele of input) {
    if (!arr.includes(ele)) arr.push(ele)
    else return ele
  }
  return undefined
}

// ------------------------------

function firstRecurringCharacter(input) {
  let hash = {}
  for (const ele of input) {
    if (ele in hash) return ele
    else hash[ele] = true
  }
  return undefined
}

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]))
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]))
// console.log(firstRecurringCharacter([2, 3, 4, 5]))
// console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]))
