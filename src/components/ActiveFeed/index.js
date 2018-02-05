import React from 'react'
import styled from 'styled-components'
import ActiveFeedItem from './ActiveFeedItem'

const UrlTitle = styled.h2`
  margin-top: 0px;
  background-color: ${props=>props.theme.headerBackgroundColour}
`
const ActiveFeed = (props) => 
  <section>
    <UrlTitle>{props.activeFeed.feed.url}</UrlTitle>
    <ActiveFeedItem {...props} />
  </section>


export default ActiveFeed