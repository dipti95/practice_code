function longestPalindrome(string) {
  let longest = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      let subStr = string.slice(i, j + 1);
      if (longest.length < subStr.length && isPalindrome(subStr)) {
        longest = subStr;
      }
    }
  }
  return longest;
}

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
