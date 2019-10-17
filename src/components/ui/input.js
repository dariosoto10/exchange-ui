import React, { useEffect, useRef } from 'react'

import { InputStyle } from '../../styles/ui'
import PropTypes from 'prop-types'

const Input = ({ value, disabled, handleChange, handleEnterPress, placeholder, label, focus }) => {

  const inputRef = useRef(null)

  useEffect(() => {
    if (focus) {
      inputRef.current.focus()
    }
  }, [])

  return <InputStyle>
    <label>{label}</label>
    <input type="text"
      value={value}
      ref={inputRef}
      disabled={disabled}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyDown={handleEnterPress}
    />
  </InputStyle>
}

Input.propTypes = {
  value: PropTypes.any,
  focus: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  handleEnterPress: PropTypes.func
}

export default Input
