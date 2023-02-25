import React, { Component } from 'react'

class Gif extends Component {
  handleClick = () => {
    return null
  }

  render () {
    const { id } = this.props
    const src = `https://media1.giphy.com/media/${id}/giphy.gif`
    return <img src={src} className="gif" onClick={this.handleClick} />
  }
}

// https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDRhMjcyMDFiYzY0M2RlMjNlOGVhM2EzNTYwZDhlNTNkYTkxNWUxMiZjdD1n/a93jwI0wkWTQs/giphy.gif

// https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif

export default Gif
