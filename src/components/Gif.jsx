import React, { Component } from 'react'

class Gif extends Component {
  handleClick = () => {
    return null
  }

  render () {
    const { id } = this.props
    const src = `https://media2.giphy.com/media/${id}/200.gif`
    return <img src={src} className="gif" onClick={this.handleClick} />
  }
}

export default Gif
