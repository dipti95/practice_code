// 0(log n) time complexity;
// By using binary search;

function searchTarget(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] <= target) {
      if (nums[left] <= nums[mid] && target <= nums[right]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] <= target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}

// let nums = [4, 5, 6, 7, 0, 1, 2];
// let target = 3;
// console.log(searchTarget(nums, target));

// Another but 0(n* n) time complexity
function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}
