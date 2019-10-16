import '../../setupTest'

import Button from '../ui/button'
import React from 'react'
import { shallow } from 'enzyme'

describe('#Button layout', () => {
  const handleClick = jest.fn()
  const wrapper = shallow(<Button handleClick={handleClick} />)

  it('<Button /> should be render', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should contains one <button /> tag', () => {
    expect(wrapper.find('button').length).toBe(1)
  })

  it('handleClick prop should be called after click event', () => {
    wrapper.find('button').simulate('click')
    expect(handleClick).toHaveBeenCalled()
  })
})
