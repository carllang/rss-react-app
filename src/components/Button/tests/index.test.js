import React from 'react'
import { mount } from 'enzyme'
import Button from '../index'


describe('<Button />', () => {

  it('should render a <Button> component', () => {
    expect(mount(<Button />).find('Button').length).toEqual(1)
  })

})
