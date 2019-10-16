import '../../setupTest'

import Input from '../ui/input'
import React from 'react'
import { shallow } from 'enzyme'

describe('#Input layout', () => {
  const valueInput = 50
  const handleChange = jest.fn()
  const wrapper = shallow(<Input value={valueInput} handleChange={handleChange} />)
  const input = wrapper.find('input')

  it('<Input /> should be render', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should contains one <input /> tag', () => {
    expect(wrapper.find('input').length).toBe(1)
    expect(input.props().value).toBe(valueInput)
  })

  it('handleChange prop should be called after onChange event', () => {
    wrapper.find('input').simulate("change", { target: { value: "foo" }})
    expect(handleChange).toHaveBeenCalled()
    expect(handleChange).toHaveBeenCalledWith({ target: { value: "foo" }})
  })
})
