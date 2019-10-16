import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ handleClick }) => <button onClick={handleClick}>
  Calculate
</button>

Button.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default Button
