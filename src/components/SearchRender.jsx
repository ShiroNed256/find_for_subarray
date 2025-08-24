import { observer } from 'mobx-react-lite'
import './ui/style.css'
import {mainStore} from '../store/mainStore'
import MatrixRender from './MatrixRender'

const SearchRender = observer(() => {

  

  return (
    <div className="matrix-container" style={{ margin: '20px 0' }}>
      <MatrixRender matrix = {mainStore.Submatrix.matrix} onChange = {mainStore.Submatrix.setValue}/>
      
    </div>
  )
})

export default SearchRender