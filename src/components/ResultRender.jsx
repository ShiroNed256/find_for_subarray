import { observer } from 'mobx-react-lite'
import './ui/style.css'
import {mainStore} from '../store/mainStore'
import MatrixRender from './MatrixRender'

const ResultRender = observer((props) => {

  const submatrixBorder = (bounds) => {
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
      <MatrixRender matrix = {mainStore.Matrix.matrix} onChange = {mainStore.Matrix.setValue}/>
      {props.result.map((bounds, indexBound) => (
        <div className="highlight2" style={submatrixBorder(bounds)} key={indexBound}></div>
        ))
      }
    </div>
  )
})

export default ResultRender