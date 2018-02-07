import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'


const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.defaultBackgroundColour};
  height: 100vh;
  color: ${props => props.theme.defaultTextColour};
  padding: 0 20px;
`

const PageLayout = (props) => [
  <Header key="home" />,
  <Container key="container" >
    {props.children}
  </Container>
]


export default PageLayout
