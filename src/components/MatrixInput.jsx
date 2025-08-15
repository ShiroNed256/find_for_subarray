import React, { useState, useEffect } from 'react'

const MatrixInput = (props) => {
  const [rows, setRows] = useState(3)
  const [cols, setCols] = useState(3)
  const [matrix, setMatrix] = useState([])

  // Инициализация матрицы
  useEffect(() => {
    initializeMatrix()
  }, [rows, cols])

  const initializeMatrix = () => {
    const newMatrix = []
    for (let i = 0; i < rows; i++) {
      newMatrix[i] = []
      for (let j = 0; j < cols; j++) {
        newMatrix[i][j] = 0
      }
    }
    setMatrix(newMatrix)
  }

  const handleCellChange = (row, col, value) => {
    const newMatrix = [...matrix]
    if (value.length > 1) {
      value = value.slice(-1)
    }
    if (/^[0-9A-F]*$/.test(value)) {
      newMatrix[row][col] = value || 0
      setMatrix(newMatrix)
    }
    
  }

  const fillRandom = () => {

    const newMatrix = matrix.map(row => 
      row.map(() => Math.floor(Math.random() * 16).toString(16).toUpperCase())
    )
    setMatrix(newMatrix)
    props.onMatrixChange(matrix)
  }

  const clearMatrix = () => {
    const newMatrix = matrix.map(row => row.map(() => 0))
    setMatrix(newMatrix)
    props.onMatrixChange(matrix)
  }

  
  

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>{props.title}</h1>
      
      <div style={{ margin: '20px 0', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <label>
          Строки: 
          <input 
            type="number" 
            min="1" 
            max="10" 
            value={rows} 
            onChange={(e) => setRows(Number(e.target.value))              
            }
            style={{ marginLeft: '5px' }}
          />
        </label>
        <label>
          Столбцы: 
          <input 
            type="number" 
            min="1" 
            max="10" 
            value={cols} 
            onChange={(e) => setCols(Number(e.target.value))}
            style={{ marginLeft: '5px' }}
          />
        </label>
        <button 
          onClick={fillRandom}
          style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Сгенирировать
        </button>
        
        <button 
          onClick={clearMatrix}
          style={{ padding: '8px 16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Очистить
        </button>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${cols}, 60px)`, 
          gap: '5px', 
          marginBottom: '10px' 
        }}>
          {matrix.map((row, rowIndex) => (
            row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="text"
                value={cell}
                onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                style={{
                  width: '50px',
                  height: '50px',
                  textAlign: 'center',
                  fontSize: '16px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
            ))
          ))}
        </div>
      </div>
      
      
    </div>
  )
}

export default MatrixInput