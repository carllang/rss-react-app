import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ActiveFeed from '../components/ActiveFeed'

const Container = styled.div`
  width: 65%;
  padding: 0 20px;
  color: black;
`


class ActiveFeedContainer extends React.Component {
  render() {
    return this.props.activeFeed && this.props.activeFeed.items ?
      <Container><ActiveFeed {...this.props} /></Container>
      : <Container><div style={{ margin: '20px' }}>No active feed</div></Container>
  }
}

const mapStateToProps = ({ activeFeed })  => ({ activeFeed })

export default connect(mapStateToProps)(ActiveFeedContainer)