// import { useState } from 'react'
import Gif from './components/gif'
import SearchBar from './components/SearchBar'
// import GifList from './components/GifList'
import React from 'react'
import './App.css'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className="left-scene">left scene
        <div className="form-search">
          <SearchBar />
        </div>
      <div className="selected-gif">
            <Gif />
        </div>
      </div>
      <div className="right-scene">right scene</div>
    </div>
  )
}

export default App
