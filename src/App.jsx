import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import MatrixInput from './components/MatrixInput'
import ListRender from './components/ListRender'










function App() {

  const [matrix1, setMatrix] = useState([[]])
  const [subMatrix, setSubMatrix] = useState([[]])
  const [result, setResult] = useState([])

  const handleMatrixChange = (newMatrix) => {
    setMatrix(newMatrix)
    console.log(newMatrix)
  }

  const handleSubMatrixChange = (newMatrix) => {
    setSubMatrix(newMatrix)
  }

  function find() {
    setResult(findSubmatrix(matrix1, subMatrix))
  
  }


  let sizeSubmatrix = 2
  function findSubmatrix(matrix, submatrix){
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

  return (
    <div className="App">
      <MatrixInput  onMatrixChange={handleMatrixChange} title = 'Матрица' />
      <MatrixInput  onMatrixChange={handleSubMatrixChange} title = 'Подматрица' />
      <button onClick={find}>Найти</button>
      <ListRender items={result} />      
    </div>
  )
}

export default App
