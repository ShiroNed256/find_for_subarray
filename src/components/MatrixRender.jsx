import React, { useState, useEffect } from 'react'
import './UI/ui.css'

const MatrixRender = (props) => {
  const handleCellChange = (row, col, value) => {
      const newMatrix = [...matrix]
      if (value.length > 1) {
        value = value.slice(-1)
      }
      if (/^[0-9A-F]*$/.test(value)) {
        newMatrix[row][col] = value || 0
        props.matrix
      }
  }

  const isInSubmatrix = (row, col) => {
    return props.result.some(bounds =>
      row >= bounds.topBound &&
      row <= bounds.bottomBound &&
      col >= bounds.leftBound &&
      col <= bounds.rightBound
    )
  }

  const isTop = (row, col) => {
    return props.result.some(bounds=>
      row === bounds.topBound &&
      col >= bounds.leftBound &&
      col <= bounds.rightBound
    )
  }    

  const isBottom = (row, col) =>{
    return props.result.some(bounds=>
      row === bounds.bottomBound &&
      col >= bounds.leftBound &&
      col <= bounds.rightBound
    )
  }
    
  const isLeft = (row, col) =>{
    return props.result.some(bounds=>
      col === bounds.leftBound &&
      row >= bounds.topBound &&
      row <= bounds.bottomBound
    )
  }

  const isRight = (row, col) =>{
    return props.result.some(bounds=>
      col === bounds.rightBound &&
      row >= bounds.topBound &&
      row <= bounds.bottomBound
    )
  }

  const highlightStyle = (bounds) => {
    let numberCol = bounds.rightBound - bounds.leftBound + 1
    let numberRow = bounds.bottomBound - bounds.topBound + 1
    let numberSpaceBetwenCol = numberCol - 1 
    let numberSpaceBetwenRow = numberRow - 1
    return (
      {
        top: (bounds.topBound) ? 2 + bounds.topBound * 55 : 4,
        left: (bounds.leftBound) ? 2 + bounds.leftBound * 55 : 4,
        width: numberCol * 52 + numberSpaceBetwenCol * 3,        
        height: numberRow * 52 + numberSpaceBetwenRow * 3,
      }
    )
  }

  return (
    <div className="matrix-container" style={{ margin: '20px 0' }}>
      <div className='matrix' style={{
            gridTemplateColumns: `repeat(${props.matrix[0].length}, 50px)`, 
            gridTemplateRows: `repeat(${props.matrix.lenght}, 50px)`
              }}>
        {props.matrix.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <input 
              className={`cell ${isInSubmatrix(rowIndex, colIndex) ? "highlight" : ""}
                ${isTop(rowIndex, colIndex) ? "border-top" : ""}
                ${isBottom(rowIndex, colIndex) ? "border-bottom" : ""}
                ${isLeft(rowIndex, colIndex) ? "border-left" : ""}
                ${isRight(rowIndex, colIndex) ? "border-right" : ""}`}
              key={`${rowIndex}-${colIndex}`}
              type="text"
              value={cell}
              onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
            />
          ))
        ))}
      </div>
      {props.result.map((bounds, indexBound) => (
        <div className="highlight2" style={highlightStyle(bounds)}></div>
        ))
      }
    </div>
  )
}

export default MatrixRender