// brute force solution
const numUniqueEmails = function (emails) {
  let str = ""
  let hash = {}
  for (const ele of emails) {
    if (ele[0] === "+") break
    let idx1 = ele.indexOf("+")
    let idx2 = ele.indexOf("@")
    let email
    if (idx1 === -1) email = ele
    else email = ele.slice(0, idx1) + ele.slice(idx2)
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") {
        str += email.slice(i)
        break
      }
      if (email[i] !== ".") {
        str += email[i]
      }
    }
    if (str in hash) hash[str] += 1
    else hash[str] = 1

    str = ""
  }
  return Object.keys(hash).length
}
