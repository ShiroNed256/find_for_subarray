import { useState } from 'react'
import ResultRender from './components/ResultRender'
import Setting from './components/Setting'
import './App.css'
import { mainStore } from './store/mainStore'
import SearchRender from './components/SearchRender'
import { observer } from 'mobx-react-lite'

const App = observer(() => {
  return (
    <div className="App">
      <ResultRender result = {mainStore.Result} />
      <Setting/>

    </div>
  )
})

export default App
