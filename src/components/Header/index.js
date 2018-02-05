import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: ${props => props.theme.headerBackgroundColour};
  font-weight: normal;
  font-size: ${props => props.theme.defaultFontSize};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 20px;
  color: ${props => props.theme.defaultTextColour};
`

const HeaderMarkup = () =>
  <Container>
    <h3 style={{ fontWeight: 'normal' }}> 500Tech React & Redux RSS Feed assignment</h3>
  </Container>


const Header = (props) => <HeaderMarkup />

export default Header
