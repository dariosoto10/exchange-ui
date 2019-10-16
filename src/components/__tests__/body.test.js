import '../../setupTest'

import Body from '../body'
import React from 'react'
import { shallow } from 'enzyme'

describe('#Body layout', () => {
  const wrapper = shallow(<Body />)

  it('<Body /> should be render', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should contains two <Input /> tag', () => {
    expect(wrapper.find('Input').length).toBe(2)
  })

  it('should contains an <Button /> tag', () => {
    expect(wrapper.find('Button').length).toBe(1)
  })
})
