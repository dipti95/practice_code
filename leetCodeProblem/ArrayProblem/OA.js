function getPara(arr, width) {
  let res = []

  for (let para of arr) {
    let str = para.join(" ")
    res = helper(str, res, width)
  }

  return res
}

function helper(str, res, width) {
  if (str.length === 0) return res
  if (str.length > width) {
    let dummy = []
    let cur = str.split(" ")
    while (cur.join(" ").length > 16) {
      let ele = cur.pop()
      dummy.unshift(ele)
    }
    res.push("*" + cur.join(" ") + "*")
    helper(dummy.join(" "), res, width)
  } else if (str.length < width) {
    res = secondHelper(str, res, width)
  } else res.push("*" + str + "*")

  return res
}

function secondHelper(str, res, width) {
  if ((str.length - width) % 2 === 0) {
    let current = ""
    for (let i = 1; i <= Math.floor(str.length / 2); i++) {
      current += " "
    }

    res.push("*" + current + str + current + "*")
  } else {
    let current = ""
    for (let i = 1; i <= Math.floor(str.length / 2); i++) {
      current += " "
    }
    res.push("*" + current + str + current + " *")
  }

  return res
}

console.log(
  getPara(
    [
      ["hello", "world"],
      ["How", "areYou", "doing"],
      ["Please", "look", "and", "align", "to", "the", "center"],
    ],
    16
  )
)
