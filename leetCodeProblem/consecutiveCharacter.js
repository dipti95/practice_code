function maxCount(string) {
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    let curr = 1;
    for (let j = i + 1; j < string.length; j++) {
      if (s[i] === s[j]) curr++;
    }
    if (count < curr) {
      count = curr;
    }
  }
  return count;
}
