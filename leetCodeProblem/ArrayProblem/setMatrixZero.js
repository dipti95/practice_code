/* 
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place.
**/

function setZero(matrix) {
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                array.push(i)
                array.push(j)
            }
        }
    }
    //console.log(array)
    for (let k = 0; k < array.length; k++) {
        for (let j = 0; j < matrix[array[k]].length; j++) {
            matrix[array[k]][j] = 0;
        }
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][array[k + 1]] = 0
        }
        k++
    }
    return matrix
}

let matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
console.log(setZero(matrix))