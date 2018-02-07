import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ActiveFeed from '../components/ActiveFeed'

const Container = styled.div`
  width: 65%;
  padding: 0 20px;
  color: black;
  overflow: scroll;
`


class ActiveFeedContainer extends React.Component {
  render() {
    return this.props.activeFeed && this.props.activeFeed.items ?
      <Container><ActiveFeed {...this.props} /></Container>
      : <Container><div style={{ margin: '20px' }}>No active feed</div></Container>
  }
}

const mapStateToProps = ({ feeds, activeId })  => {
  const activeFeed = feeds.find((item) => item.feedId === activeId)
  return {
    activeFeed 
  }
}

export default connect(mapStateToProps)(ActiveFeedContainer)