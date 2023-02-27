import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 10px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
    transform: scale(1.1);
    transition: 0.5s ease;
    cursor: pointer;
  }
`
const Link = styled.p`
  padding: 10px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  width: fit-content;
  color: black;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
`

const CopyContainer = styled.div`
  display: flex;
  height: fit-content;
  gap: 10px;
  margin-bottom: auto;
`

class CopyLink extends Component {
  handleClick = (e) => {
    navigator.clipboard.writeText('Copy this text to clipboard')
    console.log(e)
  }

  render () {
    return <CopyContainer>
      <Link>Some text to copy</Link>
      <Button onClick={this.handleClick}>
        Copy
      </Button>
    </CopyContainer>
  }
}

export default CopyLink
