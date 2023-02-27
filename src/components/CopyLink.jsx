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
  handleClick = () => {
    navigator.clipboard.writeText(this.props.link)
  }

  render () {
    const { link } = this.props
    return <CopyContainer>
      <Link>
        {link}
      </Link>
      <Button link={link} onClick={this.handleClick}>
        Copy
      </Button>
    </CopyContainer>
  }
}

export default CopyLink
