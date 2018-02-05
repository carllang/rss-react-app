import React from 'react'
import styled from 'styled-components'
import moment from 'moment-es6'
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser'

const ActiveFeedItemStyled = styled.div`
  margin: 0 40px 20px 0;
  padding: 20px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow:    0 8px 6px -6px black;
  box-shadow:         0 8px 6px -6px black;
  border: 1px solid black;
  background-color: ${props => props.theme.light};
  overflow: scroll;
`
const getContent = content => content
const ActiveFeedItem = (props) => {
  const markup = props.activeFeed.items.map((item, idx) => {
    
    return (
      <ActiveFeedItemStyled key={idx} idx={idx}>
        <h3 style={{ marginTop: '0px' }}>{item.title} - {moment(item.pubDate).format('DD/MM/YYYY')}</h3>
        <article>{ReactHtmlParser(item.content, { decodeEntities: true })}</article>
      </ActiveFeedItemStyled>
    )
  })
  return markup
}
export default ActiveFeedItem