
function isPowerOfThree(n) {
    let bool=false;
    for(let i=0; i<20; i++){
        if( Math.pow(3,i) == n){
            bool=true;
            return bool;
        }
    }
    return bool;
};
//----------------------------------
//-------------
// time complexity more 
function isPowerOfThree(n) {
    if(n === 1 || n === 3) return true
    for(let i = 1; i < Math.floor(Math.sqrt(n)) ; i++){
        if(3 ** i === n) return true
    }
    return false
}