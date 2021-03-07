import styled from '@emotion/styled'

export const Button = styled.button`
  border-radius: 30px;
  border-color: black;
  background-color: white;
  color: red;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  transition: opacity ease .3s;

  &:hover {
    opacity: 0.8;
  }
`