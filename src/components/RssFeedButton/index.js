import React from 'react'
import styled from 'styled-components'

const FeedItem = styled.button`
  border: 1px solid ${props => props.theme.black};
  background-color: ${props => props.theme.sage};
  padding: 10px 25px 10px 10px;
  position: relative;
  cursor: pointer;q
  border-radius: 4px;
  width: 100%;
  margin-bottom: 20px;
  text-align: left;

  ${props => props.active && `
    background-color: ${props.theme.light};
  `}
`
const CloseIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  font-style: none;
  font-weight: bold;
  color: ${props => props.theme.red};
`

const RssFeedButton = (props) => 
  <FeedItem onClick={() => props.clickFeed(props.feedId)} active={props.activeId === props.feedId}>
    {props.children}
    <CloseIcon onClick={() => props.removeFeedItem(props.feedId)}>X</CloseIcon>
  </FeedItem>

export default RssFeedButton