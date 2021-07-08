function countPrime(n){
    let count = 0;
    for(let i = 2; i < n ; i++){
        if(isPrime(i)) count ++
    }
    return count;
}
function isPrime(num){
    for(let i =2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0) return false
    }
    return true;
}
//-----------------------------------
//-----------------------------------
// time complexity less than previous solution 
//0 <= n <= 5 * 10**6 it is given 
// but previous solution is better than this 
function countPrime(n){
    if(n === 0 || n === 1 || n === 2) return 0
    let count = 1;
    for(let i = 3; i < n; i+= 2){
        if(isPrime(i)) count ++
    }
    return count
}
function isPrime(num){
    for(let i = 3; i <= Math.floor(Math.sqrt(num)); i+=2){
        if(num % i === 0) return false;
    }
    return true;
}