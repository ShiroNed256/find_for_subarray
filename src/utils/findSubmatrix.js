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


function PointsMatrix(y, x){
  let distanceBetweenPoints = sizeSubmatrix - 1
  this.topLeftIndex =new Point(x, y)
  this.topRightIndex = new Point(x+distanceBetweenPoints, y)
  this.bottomLeftIndex = new Point(x, y + distanceBetweenPoints)
  this.bottomRightIndex = new Point(x + distanceBetweenPoints, y + distanceBetweenPoints)  
}

function Point(x, y){
  this.x = x
  this.y = y  
}