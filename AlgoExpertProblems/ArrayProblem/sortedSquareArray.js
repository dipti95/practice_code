function sortedSquaredArray(array) {
    let resultArr = new Array(array.length).fill(0)
    // because we want same length as given array is 
    // but we can also simply define the resultArr = [] ,after that we have to push in this situation 

    for (let i = 0; i < array.length; i++) {
        resultArr[i] = array[i] * array[i];
    }
    return resultArr.sort((a, b) => a - b)
}



//--------------------------------------
//-------------BETTER WAY OF DOING THIS WITH 0(n) time ana 0(n) space COMPLEXITY

function sortedSquaredArray(array) {
    let resultArr = new Array(array.length).fill(0);
    let smallerValueIdx = 0
    let largerValueIdx = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        let smallValue = array[smallerValueIdx];
        let largeValue = array[largerValueIdx];

        if (Math.abs(smallValue) > Math.abs(largeValue)) {
            // Math.abs use because there could be a negative in the given array 
            resultArr[i] = smallValue * smallValue;
            smallerValueIdx++
        } else {
            resultArr[i] = largeValue * largeValue;
            largerValueIdx--
        }
    }
    return resultArr
}




// let array = [1, 2, 3, 5, 6, 8, 9];
// console.log(sortedSquaredArray(array));