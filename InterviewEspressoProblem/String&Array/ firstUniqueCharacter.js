function firstUniqueCharacter(str) {
  let obj = {};
  for (let ele of str) {
    if (ele in obj) obj[ele] += 1;
    else obj[ele] = 1;
  }
  let key = Object.keys(obj);

  for (let ele of key) {
    if (obj[ele] === 1) return str.indexOf(ele);
  }
  return -1;
}
