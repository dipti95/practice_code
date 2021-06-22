/*
For Example , if given array  is [1,2,3],  the minimum amount of change(the minimum sum of money) 
that you can't create is '4'. if you're given no coins, the minimum amount of change that you can't 
create is '1';
**/


function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    // sort in ascending order
    let changeCreated = 0;
    for (const coin of coins) {
        if (coin > changeCreated + 1) return changeCreated + 1;

        changeCreated += coin
    }
    return changeCreated + 1
}
// let coins = [5,7,1,1,2,3,3,22]
// console.log(nonConstructibleChange(coins))
// output 45