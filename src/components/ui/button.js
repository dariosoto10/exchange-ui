import { ButtonStyle } from '../../styles/ui'
import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ handleClick }) =>
  <ButtonStyle onClick={handleClick}>
    Calculate
  </ButtonStyle>

Button.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default Button
