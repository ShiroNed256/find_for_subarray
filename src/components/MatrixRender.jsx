import { observer } from 'mobx-react-lite'
import './ui/style.css'

const MatrixRender = observer((props) => {
  const handleCellChange = (row, col, value) => {
    if (value.length > 1) {
      value = value.slice(-1)
    }
    if (/^[0-9A-F]*$/.test(value)) {
      value = value || 0
      props.onChange(row, col, value)
    }
  }

  return (
    <div className='matrix' style={{
          gridTemplateColumns: `repeat(${props.matrix[0].length}, 50px)`, 
          gridTemplateRows: `repeat(${props.matrix.lenght}, 50px)`
            }}>
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
  )
})

export default MatrixRender