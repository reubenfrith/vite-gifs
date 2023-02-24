import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBar extends Component {
  render () {
    return (
      <div>
        <input type="text" className="form-control form-search" />
        <FontAwesomeIcon icon="fas fa-search" />
      </div>
    )
  }
}

export default SearchBar
