import { useState } from 'react'
import MatrixRender from './components/MatrixRender'
import Setting from './components/Setting'
import './App.css'


function App() {

  const [matrix, setMatrix] = useState([[]])
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
      <Setting matrixChange = {handleMatrixChange} />
    </div>
  )
}

export default App
