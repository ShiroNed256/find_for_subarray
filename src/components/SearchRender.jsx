import React, { useState } from "react"
import { observer } from 'mobx-react-lite'
import './ui/style.css'
import {mainStore} from '../store/mainStore'
import MatrixRender from './MatrixRender'
import ParametrBlock from './ParametrBlock'

const SearchRender = observer(() => {
  const [rows, setRows] = useState(3)
  const [cols, setCols] = useState(3)

  const fillRandom = () => {
      mainStore.initSubmatrix(rows, cols)
  }

  const clearMatrix = () => {
      mainStore.initSubmatrix(rows, cols)
  }

  const changeRowMatrix = (numberRows) => {
      setRows(numberRows)
  }

  const changeColMatrix = (numberCols) => {
      setCols(numberCols)
  }
  
  const find = () => {
      mainStore.findResult()
  }
 
  return (
    <div className="setting-block" style={{ display: "grid", justifyContent: "start"}} >
      <h3>Настройки маски</h3>
      <div style={{ margin: '20px 0', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <ParametrBlock parametrName = 'Строки' parametrChange = {changeRowMatrix} parametrKey = {1} />
          <ParametrBlock parametrName = 'Столбцы' parametrChange = {changeColMatrix} parametrKey = {2} />
          <br />
          <button className='button button-green' onClick={fillRandom}>
              Создать
          </button>
          <button className='button button-red' onClick={clearMatrix}>
              Очистить
          </button>
          <button className='button button-blue' onClick={find}>
              Поиск
          </button>
      </div>
      <div className="matrix-container" >
        <MatrixRender matrix = {mainStore.Submatrix.matrix} onChange = {mainStore.Submatrix.setValue}/>   
      </div>

    </div>
  )
})

export default SearchRender