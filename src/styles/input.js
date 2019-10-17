import styled from 'styled-components'

const InputStyle = styled.input`
  width: 40%;
  font-size: 15px;
  padding: 0.3rem 1rem;
  border-radius: 3px;
  border: ${props => `2px solid ${props.theme.blue}`};

  @media (max-width: 600px) {
    width: 80%;
    margin-bottom: 1rem;
  }
`

export default InputStyle
