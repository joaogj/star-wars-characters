import React from 'react'
import styled from '@emotion/styled'

const Name = styled.h1`
  color: ${props => props.color ? props.color : 'black'};
  font-size: 52px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Character = (props) => {
  return (
    <>
      <Name color={props.color} >{props.name}</Name>
    </>
  )
}

export default Character