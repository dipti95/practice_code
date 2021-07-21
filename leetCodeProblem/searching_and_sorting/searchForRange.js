// nums is array of number which are in ascending order.
// if target not found it return [-1,-1]

function searchForRange(nums, target) {
    let index1 = find(nums, target);
    let index2 = find(nums, target, false);

    return [index1, index2];
}

function find(array, target, findMin = true) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {

        const mid = Math.floor((min + max) / 2)

        if (nums[mid] > target) max = mid - 1;
        else if (nums[mid] < target) min = mid + 1;

        else {
            if (findMin) {
                if (nums[mid - 1] === target) max = mid - 1;
                else return mid
            }
            else {
                if (nums[mid + 1] === target) min = mid + 1
                else return mid
            }
        }
    }
    return -1
}

// nums = [5, 7, 7, 8, 8, 10]
// target = 8

// console.log(searchForRange(nums, target))