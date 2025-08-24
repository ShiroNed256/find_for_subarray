import { useState } from 'react'
import ResultRender from './components/ResultRender'
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
      <ResultRender matrix = {matrix} result = {result} />
      <Setting matrixChange = {handleMatrixChange} />
    </div>
  )
}

export default App
