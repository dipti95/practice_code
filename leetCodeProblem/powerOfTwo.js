function isPowerTwo(n) {
  if (n === 1) return true;
  while (n % 2 === 0) n / 2;
  return false;
}
