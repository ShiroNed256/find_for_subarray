import React from 'react';

let sizeSubmatrix = 2
function findSubmatrix(matrix, submatrix) 
{
    const results = []
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    for (let y = 0; y <= rows - sizeSubmatrix; y++){
      for (let x = 0; x <= cols - sizeSubmatrix; x++){
        if (checkSubmatrix(matrix, submatrix, y, x)) {
                results.push(new PointsMatrix(y, x)) // Возвращаем координаты левого верхнего угла
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




export default findSubmatrix