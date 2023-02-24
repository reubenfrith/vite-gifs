import React, { Component } from 'react'
import Gif from './gif'

class GifList extends Component {
  render () {
    const { gifs } = this.props
    return (
      <div>
        {gifs.map((gif) => { return <Gif src={gif.id} key={gif.id} /> })}
      </div>
    )
  }
}

export default GifList
