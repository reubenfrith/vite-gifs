import GifHero from './components/GifHero'
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gifs: [],
      selectedGif: {
        id: 'PtYsKeuRNq8JqxatkT',
        link: 'https://giphy.com/embed/PtYsKeuRNq8JqxatkT'
      }
    }
    this.searchQuery = this.searchQuery.bind(this)
    this.selectGif = this.selectGif.bind(this)
  }

  searchQuery = async (query) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Yoghxcc8Vg0ulwYwc7Nr942aKHNN43ro&q=${query}&limit=25&offset=0&lang=en`)
    const data = await response.json()
    const result = data.data.map((gif) => { return { id: gif.id, link: gif.embed_url } })
    this.setState({ gifs: result })
  }

  selectGif = (id, link) => {
    console.log('ID:', id, 'Link:', link)
    this.setState({
      selectedGif: {
        id,
        link
      }
    })
  }

  render () {
    if (this.state.gifs.length === 0) {
      this.searchQuery('monster')
    }

    return (
    <div id="app">
    <div className="left-scene">
      <SearchBar searchFunction={this.searchQuery}/>
      <GifHero id={this.state.selectedGif.id} link={this.state.selectedGif.link} />
    </div>
    <div className="right-scene">
      <GifList gifList={this.state.gifs} GifListSelectGif={this.selectGif} />
    </div>
  </div>
    )
  }
}

export default App
