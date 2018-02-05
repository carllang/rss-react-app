import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { 
  addFeed, 
  setActiveFeed, 
  setActiveFeedbyIndex,
  removeFeed
} from '../ducks/rss'
import RssFeedButton from '../components/RssFeedButton'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { getRssFeed } from '../services/rss'


const Container = styled.div`
  width: 35%;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${props => props.theme.menuBackgroundColour}
`
const initialState = { url: '', activeId: null }

class SideBarContainer extends React.Component {
  constructor () {
    super()
    this.state = Object.assign({}, initialState)
  }

  renderFeeds = () => {
    const copiedFeeds = Object.assign([], this.props.feeds)
    const markup = copiedFeeds.reverse().map((item, idx) => {
      return  <RssFeedButton 
                key={item.feedId} 
                feedId={item.feedId} 
                activeId={this.state.activeId} 
                clickFeed={this.clickFeed} 
                removeFeedItem={this.removeFeedItem}
              >
                {item.feed.url}
              </RssFeedButton>
    })
    return markup
  }

  removeFeedItem = (index) => {
    this.props.dispatchRemoveFeed(index)
  }

  clickFeed = (index) => {
    this.props.dispatchSetActiveByIndex(index)
    this.setState({ ...this.state, activeId: index })
  }

  getFeed(url) {
    return getRssFeed(url)
  }

  onChange = (e) => {
    this.setState({ ...this.state, url: e.target.value })
  }

  resetInput = () => {
    this.setState(initialState)
  }
  
  onClickAddFeed = (e) => {
    e.preventDefault()
    if (this.state.url.length > 0) {
       this.getFeed(this.state.url).then(response => {
        response.json().then(res => {
          this.props.dispatchAddFeed(res)
          this.props.dispatchSetActive(res)
          
        })
      }).catch(function (e) {
        console.log('API Error ', e)
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, activeId: nextProps.activeFeedId })
  }

  render() {
    return(
      <Container>
        <form style={{ marginBottom: '20px' }} onSubmit={this.onClickAddFeed}>
          <TextField placeholder="Enter feed url" name="feedSearch" value={this.state.url} onChange={this.onChange} resetInput={this.resetInput} />
          <Button type="submit" onClickAddFeed={this.onClickAddFeed} style={{ margin : '10px' }}>Search</Button>
        </form>  
        {this.renderFeeds()}
      </Container>
    )
  }
}

const mapStateToProps = ({ feeds, activeFeed }) => {
  const activeFeedId = activeFeed ? activeFeed.feedId : null
  return {
    feeds,
    activeFeedId
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchRemoveFeed: index => dispatch(removeFeed(index)),
    dispatchSetActiveByIndex: index => dispatch(setActiveFeedbyIndex(index)),
    dispatchAddFeed: url => dispatch(addFeed(url)),
    dispatchSetActive: url => dispatch(setActiveFeed(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer)