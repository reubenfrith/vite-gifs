import React, { Component } from 'react'
import Gif from './gif'

class GifList extends Component {
  render () {
    const { gifList, GifListSelectGif } = this.props
    return (
      <div className='gif-list'>
        {gifList.map((gif) => { return <Gif id={gif.id} key={gif.id} link={gif.link} GifSelectedGif={GifListSelectGif} /> })}
      </div>
    )
  }
}

export default GifList
