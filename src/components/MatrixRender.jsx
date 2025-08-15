import React, { useState, useEffect } from 'react'
import './UI/ui'

const MatrixRender = (props) => {
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

    const isInSubmatrix = (row, col) => {
    

    }

    return (
      <div style={{ margin: '20px 0' }}>
        <div className='matrix' style={{gridTemplateColumns: `repeat(${col}, 60px)`}}>
          {props.matrix.map((row, rowIndex) => (
            row.map((cell, colIndex) => (
              <input 
                className='cell'
                key={`${rowIndex}-${colIndex}`}
                type="text"
                value={cell}
                onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
              />
            ))
          ))}
        </div>
      </div>
    )
}

export default MatrixRender