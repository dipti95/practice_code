/* let say if n = 6 denoms= [1,5]  
so, number of ways to get 6 is 2 => 1*1 +5*1 and 6*1
*/

/* So, hear in solution I made a dummyArray of length n+1;
  1st value in the dummyArray will be 1;
  *** because if in any case n would be 0 then we simply want to return 1
   ( return dummyArray of n length (dummyArray[n]) =>  dummyArray[0] is 1) 
   ***
*/

/*  for a given exmple above so, dummyArray be like [1,0,0,0,0,0,0]
if we that first element of denoms hear it is 1
so , we have to check the index of dummyArray with value 1 
if 1 <= index then dummyArray[index] += dummyArray[index -element of denoms]
so , hear first  element of denom is 1it id like dummyArray[index] += dummyArray[index -1]
for the first time if we take index 0 then the above condition didn't satisfy
after that index = 1 so hear 1 < = 1
that condition satify so dummyArr[1] += dummyArr[1-1] means dummyArr[0]

means dummyArr[1] = 1
similarly we have to do for all the element of denoms;
at last return dummyArr[n]
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
