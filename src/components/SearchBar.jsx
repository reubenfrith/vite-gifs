import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBar extends Component {
  handleChange = (event) => {
    this.props.searchFunction(event.target.value)
  }

  render () {
    return (
      <div>
        <input type="text" className="form-search" onChange={ this.handleChange } />
        <FontAwesomeIcon icon="fas fa-search" />
      </div>
    )
  }
}

export default SearchBar
