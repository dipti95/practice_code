function increasingTripletSubsequence(nums) {
    let firstNumber = Infinity;
    let secondNumber = Infinity;
    for (const num of nums) {
        if (num > firstNumber && num > secondNumber) return true;
        else if (num > firstNumber) secondNumber = num;
        else firstNumber = num
    }
    return false;
}


function increasingTripletSubsequence(nums) {
    let min = nums[0];
    let secondMinUpdatedAfterMin = Infinity;
    for (let val of nums) {
        if (val <= min) {
            min = val;
        } else if (val <= secondMinUpdatedAfterMin) {
            secondMinUpdatedAfterMin = val;
        } else {  // min < secondMinUpdatedAfterMin < val
            return true;
        }
    }
    return false;
}


let nums = [20, 100, 10, 12, 5, 13]
console.log(increasingTripletSubsequence(nums))
