// Two words are given and we have to check that they are anagram or not and return the boolean value;

function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  let obj = {};

  for (let ele of s) {
    if (ele in obj) obj[ele] += 1;
    else obj[ele] = 1;
  }

  for (let ele of t) {
    if (hash[ele]) hash[ele]--;
    else return false;
  }
  return true;
}

// Important
function groupAnagram(array) {
  let obj = {};
  for (let ele of array) {
    let item = ele.split("").sort().join("");
    if (item in obj) obj[item].push(ele);
    else obj[item].push([ele]);
  }
  let value = Object.values(obj);
  return value;
}
