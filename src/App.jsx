import { useState } from 'react'
import MatrixRender from './components/MatrixRender'


function App() {

  const [matrix, setMatrix] = useState([[1, 3, 2], [2, 0, 0], [0, 0, 0], [1, 3, 2], [2, 0, 0], [0, 0, 0], [1, 3, 2], [2, 0, 0], [0, 0, 0], [1, 3, 2], [2, 0, 0], [0, 0, 0]])
  const [result, setResult] = useState([
    {
      leftBound: 0,
      rightBound: 1,
      topBound: 0,
      bottomBound:7, 
    },
    {
      leftBound: 0,
      rightBound: 0,
      topBound: 0,
      bottomBound:0, 
    }
  ])

  const handleMatrixChange = (newMatrix) => {
    setMatrix(newMatrix)
  }

  const handleSubMatrixChange = (newResult) => {
    setResult(newResult)
  }

  return (
    <div className="App">
        <MatrixRender matrix = {matrix} result = {result} />
    </div>
  )
}

export default App
