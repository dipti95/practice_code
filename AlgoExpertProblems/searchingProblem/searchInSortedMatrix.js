function searchInSortedMatrix(matrix,target){
    let row = 0;
    let col = matrix[0].length - 1;
    while(row < matrix.length && col >= 0){
        if(matrix[row][col] > target) col--;
        else if(matrix[row][col] < target) row++;
        else return [row, col]
    }
    return [-1,-1]
}
// we choose this method because in question it is given that the each row and each 
// column in matrix is in the sorted form 



// otherwise we have to solve by nested loop 

// let matrix = [
//     [1, 4, 7, 12, 15, 1000],
//     [2, 5, 19, 31, 32, 1001],
//     [3, 8, 24, 33, 35, 1002],
//     [40, 41, 42, 44, 45, 1003],
//     [99, 100, 103, 106, 128, 1004]
//   ]
//   let target = 44;
//   console.log(searchInSortedMatrix(matrix , target));