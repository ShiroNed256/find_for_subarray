import React, { useState } from 'react'
import ParametrBlock from './ParametrBlock'
import './ui/style.css'
import {mainStore} from '../store/mainStore'
import { observer } from 'mobx-react-lite'
import SearchRender from './SearchRender'

const Setting = observer((props) => {
    const [rows, setRows] = useState(3)
    const [cols, setCols] = useState(3)

    const fillRandom = () => {
        mainStore.initMatrix(rows, cols)
        mainStore.Matrix.fillRandom()
    }

    const clearMatrix = () => {
        mainStore.initMatrix(rows, cols)
    }

    const changeRowMatrix = (numberRows) => {
        setRows(numberRows)
    }

    const changeColMatrix = (numberCols) => {
        setCols(numberCols)
    }


    return (
        <div className="setting-block">
            <h3>Настройки матрицы</h3>
            <div style={{ margin: '20px 0', display: 'flex', gap: '10px', flexWrap: 'nowrap', alignItems: 'center' }}>
                <ParametrBlock parametrName = 'Строки' parametrChange = {changeRowMatrix}  />
                <ParametrBlock parametrName = 'Столбцы' parametrChange = {changeColMatrix} />
                <button className='button button-green' onClick={fillRandom}>
                    Сгенирировать
                </button>
                <button className='button button-red' onClick={clearMatrix}>
                    Очистить
                </button>
            </div>
            <SearchRender />
        </div>
    )
})

export default Setting