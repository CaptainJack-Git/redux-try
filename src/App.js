import React from 'react'
import Desc from '@/Desc'
import Counter from '@/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>hello redux</p>
        <Desc child={<Counter />} title="redux使用 - 基础" />
      </header>
    </div>
  )
}

export default App
