function groupAnagram(strs) {
  let obj = {};

  for (let ele of strs) {
    let str = ele.split("").sort().join("");
    if (str in obj) obj[str].push(ele);
    else obj[str] = [ele];
  }

  return Object.values(obj);
}
