import Gif from './components/gif'
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gifs: [],
      selectedGif: 'PtYsKeuRNq8JqxatkT'
    }
    this.searchQuery = this.searchQuery.bind(this)
    this.selectGif = this.selectGif.bind(this)
  }

  searchQuery = async (query) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Yoghxcc8Vg0ulwYwc7Nr942aKHNN43ro&q=${query}&limit=25&offset=0&lang=en`)
    const data = await response.json()
    const result = data.data.map((gif) => { return { id: gif.id } })
    this.setState({ gifs: result })
  }

  selectGif = (id) => {
    this.setState({ selectedGif: id })
  }

  render () {
    if (this.state.gifs.length === 0) {
      this.searchQuery('monster')
    }

    return (
    <div id="app">
    <div className="left-scene">
      <SearchBar searchFunction={this.searchQuery}/>
      <div className="selected-gif">
          <Gif id={this.state.selectedGif} />
      </div>
    </div>
    <div className="right-scene">
      <GifList gifList={this.state.gifs} GifListSelectGif={this.selectGif} />
    </div>
  </div>
    )
  }
}

export default App
