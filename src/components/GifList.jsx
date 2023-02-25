import React, { Component } from 'react'
import Gif from './gif'

class GifList extends Component {
  render () {
    const { gifList } = this.props
    return (
      <div className='gif-list'>
        {console.log('gifList', gifList)}
        {gifList.map((gif) => { return <Gif id={gif.id} key={gif.id} /> })}
      </div>
    )
  }
}

export default GifList
