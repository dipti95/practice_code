// Run time is more in this solution
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

// Another way - Run time is less then previous solution;
function findDisappearedNumbers(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    let idx = num - 1;
    nums[idx] = Math.abs(nums[idx]) * -1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }
  return res;
}
