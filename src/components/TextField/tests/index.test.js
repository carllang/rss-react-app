import React from 'react'
import { mount } from 'enzyme'
import TextField from '../index'


describe('<TextField />', () => {

  it('should render a <TextField> component', () => {
    expect(mount(<TextField />).find('TextField').length).toEqual(1)
  })

})
