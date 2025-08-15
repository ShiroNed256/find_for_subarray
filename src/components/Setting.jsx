import ParametrBlock from './ParametrBlock'
import './UI'

const Setting = () => {
    const [rows, setRows] = useState(3)
    const [cols, setCols] = useState(3)
    const [matrix, setMatrix] = useState([])

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

    const fillRandom = () => {
        const newMatrix = matrix.map(row => 
            row.map(() => 
                Math.floor(Math.random() * 16)
                .toString(16)
                .toUpperCase())
        )
        setMatrix(newMatrix)
    }

    const clearMatrix = () => {
        const newMatrix = matrix.map(row => row.map(() => 0))
        setMatrix(newMatrix)
    }

    const changeRowMatrix = (numberRows) => {
        setRows(numberRows)
    }

    const changeColMatrix = (numberCols) => {
        setCols(numberCols)
    }


    return (
        <div className="settingBlock">
            <h3>Настроки матрицы</h3>
            <div style={{ margin: '20px 0', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <ParametrBlock parametrName = 'Строки' parametrChange = {changeRowMatrix} />
                <ParametrBlock parametrName = 'Столбцы' parametrChange = {changeColMatrix} />
                <button className='button button-green' onClick={fillRandom}>
                    Сгенирировать
                </button>                
                <button className='button button-red' onClick={clearMatrix}>
                    Очистить
                </button>
            </div>
            <h3>Настроки маски</h3>
            
      
        </div>
    )
}

export default Setting