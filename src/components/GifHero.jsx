import React, { Component } from 'react'
import CopyLink from './CopyLink'
import Gif from './Gif'

class GifHero extends Component {
  render () {
    const { id, link } = this.props
    return <div className="selected-gif">
      <Gif id={id} />
      <CopyLink link={link} />
   </div>
  }
}

export default GifHero
