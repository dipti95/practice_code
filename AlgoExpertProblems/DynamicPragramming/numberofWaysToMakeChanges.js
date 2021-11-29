/* let say if n = 6 denoms= [1,5]  
so, number of ways to get 6 is 2 => 1*1 +5*1 and 6*1
*/

function numberOfWays(n, denoms) {
  let dummyArr = new Array(n + 1).fill(0);
  dummyArr[0] = 1;

  for (let denom of denoms) {
    for (let num = 0; num < dummyArr.length; num++) {
      if (denom <= num) {
        dummyArr[num] += dummyArr[num - denom];
      }
    }
  }
  return dummyArr[n];
}
