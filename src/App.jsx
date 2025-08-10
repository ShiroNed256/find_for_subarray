import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}


function findSubmatrix(matrix, submatrix) 
{
    const results = []
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    for (let y = 0; y <= rows - 2; y++){
      for (let x = 0; x <= cols - 2; x++){
        if (checkSubmatrix(matrix, submatrix, i, j)) {
                return {row: i, col: j}; // Возвращаем координаты левого верхнего угла
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
    return tru

export default App
