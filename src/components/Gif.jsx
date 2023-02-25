import React, { Component } from 'react'

class Gif extends Component {
  handleClick = () => {
    this.props.GifSelectedGif(this.props.id)
  }

  render () {
    const { id } = this.props
    const src = `https://media1.giphy.com/media/${id}/giphy.gif`
    return <img src={src} className="gif" id={id} onClick={this.handleClick} />
  }
}

export default Gif
