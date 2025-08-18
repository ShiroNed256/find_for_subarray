import React, { useState } from 'react'
import ParametrBlock from './ParametrBlock'
import './UI/ui.css'

const Setting = (props) => {
    const [rows, setRows] = useState(3)
    const [cols, setCols] = useState(3)

    const fillRandom = () => {
        const newMatrix = []
        for (let i = 0; i < rows; i++) {
            newMatrix[i] = []
            for (let j = 0; j < cols; j++) {
                newMatrix[i][j] = Math.floor(Math.random() * 16)
                .toString(16)
                .toUpperCase()
            }
        }
        props.matrixChange(newMatrix)
    }

    const clearMatrix = () => {
        props.matrixChange([])
    }

    const changeRowMatrix = (numberRows) => {
        console.log(numberRows)
        setRows(numberRows)
    }

    const changeColMatrix = (numberCols) => {
        setCols(numberCols)
    }


    return (
        <div className="setting-block">
            <h3>Настройки матрицы</h3>
            <div style={{ margin: '20px 0', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <ParametrBlock parametrName = 'Строки' parametrChange = {changeRowMatrix} parametrKey = {1} />
                <ParametrBlock parametrName = 'Столбцы' parametrChange = {changeColMatrix} parametrKey = {2} />
                <br />
                <button className='button button-green' onClick={fillRandom}>
                    Сгенирировать
                </button>
                <button className='button button-red' onClick={clearMatrix}>
                    Очистить
                </button>
            </div>
            <h3>Настройки маски</h3>

        </div>
    )
}

export default Setting