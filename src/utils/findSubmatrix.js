let sizeSubmatrix = 2
function findSubmatrix(matrix, submatrix) 
{
    const results = []
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    for (let y = 0; y <= rows - 2; y++){
      for (let x = 0; x <= cols - 2; x++){
        if (checkSubmatrix(matrix, submatrix, y, x)) {
                results.push(getPointsMatrix(y, x)) // Возвращаем координаты левого верхнего угла
            }
      }
    }
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


function getPointsMatrix(y, x){
  let distanceBetweenPoints = sizeSubmatrix - 1
  this.topLeftIndex = getPoint(x, y)
  this.topRightIndex = getPoint(x+distanceBetweenPoints, y)
  this.bottomLeftIndex = getPoint(x, y + distanceBetweenPoints)
  this.bottomRightIndex = getPoint(x + distanceBetweenPoints, y + distanceBetweenPoints)
}

function getPoint(x, y){
  this.x = x
  this.y = y
}