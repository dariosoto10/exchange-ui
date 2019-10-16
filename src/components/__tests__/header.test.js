import '../../setupTest'

import Header from '../header'
import React from 'react'
import { shallow } from 'enzyme'

describe('#Header layout', () => {
  const wrapper = shallow(<Header />)

  it('<Header /> should be render', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should contains two <header /> tag', () => {
    expect(wrapper.find('header').length).toBe(1)
  })

  it('should contains the correct title <Exchange UI>', () => {
    expect(wrapper.find('header').text()).toBe('Exchange UI')
  })
})
