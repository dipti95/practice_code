function isPowerTwo(n) {
  if (n === 0) return false;
  while (n % 2 === 0) n /= 2;
  return true;
}
