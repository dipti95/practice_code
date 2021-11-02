function validPalindrome(strs) {
  let alphaNum = "1234567890abcdefghijklmnopqrstuvwxyz";
  let str = "";

  for (let ele of strs) {
    let x = ele.toLowerCase();
    if (alphaNum.includes(x)) str += x;
  }

  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
