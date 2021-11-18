function findDisappearedNumbers(nums) {
  let arr = [];

  let len = nums.length;
  let result = [];

  for (let i = 1; i <= len; i++) {
    arr.push(i);
  }
  for (let ele of arr) {
    if (nums.indexOf(ele) === -1) {
      result.push(ele);
    }
  }

  return result;
}
