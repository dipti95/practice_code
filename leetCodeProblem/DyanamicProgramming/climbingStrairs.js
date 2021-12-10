/**  Each time you can either climb 1 or 2 steps. 
 In how many distinct ways can you climb to the top? */

// dp
function climbingStairs(n) {
  let arr = new Array(n).fill(0);
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

// another way
const climbStairs = (n) => {
  let first = 1;
  let second = 2;
  while (--n) {
    second = first + second;
    first = second - first;
  }
  return first;
};
