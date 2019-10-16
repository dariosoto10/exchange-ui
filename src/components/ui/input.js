import PropTypes from 'prop-types'
import React from 'react'

const Input = ({ value, disabled, handleChange}) =>
  <input type="text"
    value={value}
    disabled={disabled}
    onChange={handleChange}
  />

Input.propTypes = {
  value: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func
}

export default Input
