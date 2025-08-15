import { useState } from 'react'
import MatrixRender from './components/MatrixRender'

function App() {

  const [matrix, setMatrix] = useState([[]])
  const [result, setResult] = useState([])

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
