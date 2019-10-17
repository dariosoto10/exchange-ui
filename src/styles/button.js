import styled from 'styled-components'

const ButtonStyle = styled.button`
  width: 40%;
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.white};
  font-size: 20px;
  cursor: pointer;
  border-radius: 3px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  min-width: 200px;
`

export default ButtonStyle
