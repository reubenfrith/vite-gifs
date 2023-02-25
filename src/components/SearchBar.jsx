import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends Component {
  handleChange = (event) => {
    this.props.searchFunction(event.target.value)
  }

  render () {
    return (
      <div className='form-container'>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" className="form-search" onChange={ this.handleChange } />
      </div>
    )
  }
}

export default SearchBar
