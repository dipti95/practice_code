function spiralTraverse(array) {
    let resultArr = [];
    spiralTraverseHelper(array, 0, array.length - 1, 0, array[0].length - 1, resultArr);
    return resultArr
}

function spiralTraverseHelper(array, startRow, endRow, startCol, endCol, resultArr) {
    if (startRow > endRow || startCol > endCol) return;

    for (let col = startCol; col <= endCol; col++) {
        resultArr.push(array[startRow][col])
    }
    for (let row = startRow + 1; row <= endRow; row++) {
        resultArr.push(array[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
        resultArr.push(array[endRow][col])
    }
    for (let row = endRow - 1; row > startRow; row--) {
        resultArr.push(array[row][startCol])
    }

    spiralTraverseHelper(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, resultArr)
}

//-------------------------------
// without helper function
function spiralTraverse(array) {
    let resultArr = [];
    let startRow = 0
    let endRow = array.length - 1;
    let startCol = 0
    let endCol = array[0].length - 1
    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            resultArr.push(array[startRow][col])
        }
        for (let row = startRow + 1; row <= endRow; row++) {
            resultArr.push(array[row][endCol])
        }
        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow) break;
            resultArr.push(array[endRow][col])
        }

        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol) break;
            resultArr.push(array[row][startCol])
        }
        startCol++
        endCol--
        startRow++
        endRow--
    }
    return resultArr
}


// let array = [
//     [1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 9, 8, 7]
// ]
// console.log(spiralTraverse(array))