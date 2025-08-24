export function findSubmatrix(matrix, submatrix){
    const results = []
    const lastValidRowIndex = matrix.length - submatrix.length
    const lastValidColIndex = matrix[0].length - submatrix[0].length     

    for (let y = 0; y <= lastValidRowIndex; y++){
        for (let x = 0; x <= lastValidColIndex; x++){
        if (checkSubmatrix(matrix, submatrix, y, x)) {
                results.push(new boundMatrix(y, x, submatrix.length, submatrix[0].length))
            }
        }
    }
    return results
}

function checkSubmatrix(matrix, submatrix, startRow, startCol) {
    for (let i = 0; i < submatrix.length; i++) {
        for (let j = 0; j < submatrix[i].length; j++) {
            if (matrix[startRow + i][startCol + j] !== submatrix[i][j]) {
                return false;
            }
        }
    }
    return true
}

function boundMatrix(y, x, colLenght, rowLenght){
    return {
        leftBound: x,
        rightBound: x + rowLenght - 1,
        topBound: y,
        bottomBound: y + colLenght - 1
    }
}

