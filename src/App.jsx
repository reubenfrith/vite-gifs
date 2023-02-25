// import { useState } from 'react'
import Gif from './components/gif'
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
import React from 'react'
import './App.css'

const App = () => {
  // const [count, setCount] = useState(0)

  const gifs = [
    { id: 'xT9IgDEI1iZyb2wqo8' },
    { id: '3o6ZtaO9BZHcOjmErm' },
    { id: '3o6Zt5jXZdVJiN1eR6' },
    { id: '3o6Zt6Uz0ZdX3RdKVG' }
  ]

  return (
    <div id="app">
    <div className="left-scene">
      <SearchBar />
      <div className="selected-gif">
        <Gif />
      </div>
    </div>
    <div className="right-scene">
      <GifList gifs={gifs} />
    </div>
  </div>
  )
}

export default App
