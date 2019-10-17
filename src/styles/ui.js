import styled from 'styled-components'

export const InputStyle = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  min-width: 200px;

  input {
    width: 100%;
    font-size: 15px;
    padding: 0.3rem 1rem;
    border-radius: 3px;
    border: ${props => `2px solid ${props.theme.blue}`};
  }

  label {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    width: 80%;

    input {
      width: 80%;
      margin-bottom: 1rem;
    }

    label {
      margin-bottom: 15px;
    }
  }
`

export const RequestingStyle = styled.span`
  font-size: 20px;
`

export const ErrorStyle = styled.span`
  color: ${props => props.theme.darkPink};
  font-size: 20px;
`

export const ButtonStyle = styled.button`
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
`
export const LabelStyle = styled.label`
  margin-right: '0.5rem'
`
