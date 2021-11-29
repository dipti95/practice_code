function productExceptSelf(nums) {
  let array = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    array[i] = product;
    product *= nums[i];
  }

  product = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    array[j] *= product;
    product *= nums[j];
  }

  return array;
}
