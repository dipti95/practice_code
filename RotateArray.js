function rotate(nums, k) {
    if (nums === null || nums.length === 0) {
        return;
    }
    k = k % nums.length;
    if (k === 0) {
        return;
    }
    nums.reverse();
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length - 1);
};

const reverse = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++, end--;
    }
}
// ------------------------

function rotate(nums, k) {
    let front = nums.slice(-k);
    let end = nums.slice(0, -k);
    console.log(front.concat(end))
    return front.concat(end);
  }


  
  