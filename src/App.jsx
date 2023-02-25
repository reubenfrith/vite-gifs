// import { useEffect, useState } from 'react'
import Gif from './components/gif'
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  // const [count, setCount] = useState(0)
  const [gifs, setGifs] = useState(['xT9IgDEI1iZyb2wqo8'])

  useEffect(() => {
    async function fetchGifs () {
      const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=Yoghxcc8Vg0ulwYwc7Nr942aKHNN43ro&q=homer&limit=25&offset=0&lang=en')
      const data = await response.json()

      // console.log(JSON.stringify(data))
      const result = data.data.map((gif) => { return { id: gif.id } })
      setGifs(result)
    }

    fetchGifs()
  }, [])
  // gifs()

  // const gifs = [
  //   { id: 'xT9IgDEI1iZyb2wqo8' },
  //   { id: '3o6ZtaO9BZHcOjmErm' },
  //   { id: '3o6Zt5jXZdVJiN1eR6' },
  //   { id: '3o6Zt6Uz0ZdX3RdKVG' }
  // ]

  return (
    <div id="app">
    <div className="left-scene">
      <SearchBar />
      <div className="selected-gif">
        <Gif id={gifs[0].id}/>
      </div>
    </div>
    <div className="right-scene">
      <GifList gifList={gifs} />
    </div>
  </div>
  )
}

export default App
