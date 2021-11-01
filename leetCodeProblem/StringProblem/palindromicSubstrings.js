function countSubstrings(s) {
  // It is given in the question that (1 <= s.length <= 1000)
  if (s.length > 1000) return;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let str = s.slice(i, j + 1);

      if (palindrome(str)) count++;
    }
  }
  return count;
}

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
