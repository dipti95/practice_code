function singleNumber(nums) {
  let hash = {};
  let result = [];
  for (let ele of nums) {
    if (ele in hash) hash[ele] += 1;
    else hash[ele] = 1;
  }
  let keys = Object.keys(hash);
  for (let key of keys) {
    if (hash[key] === 1) result.push(parseInt(key));
  }

  return result;
}
