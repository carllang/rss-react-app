import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { 
  addFeed, 
  setActiveFeedbyIndex,
  removeFeed
} from '../ducks/rss'
import RssFeedButton from '../components/RssFeedButton'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { getRssFeed } from '../services/rssService'

const Container = styled.div`
  width: 35%;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${props => props.theme.menuBackgroundColour}
`


class SideBarContainer extends React.Component {
  constructor () {
    super()
    this.state = { url: '' }
  }

  renderFeeds = () => {
    const copiedFeeds = Object.assign([], this.props.feeds)
    const markup = copiedFeeds.reverse().map((item, idx) => {
      return  item.feed ? <RssFeedButton
                key={idx} 
                feedId={item.feedId} 
                activeId={this.props.activeId} 
                clickFeed={this.clickFeed} 
                removeFeedItem={this.removeFeedItem}
              >
                {item.feed.url}
              </RssFeedButton>
              : null
    })
    return markup
  }

  removeFeedItem = (index) => {
    this.props.dispatchRemoveFeed(index)
  }

  clickFeed = (index) => {
    this.props.dispatchSetActiveByIndex(index)
  }

  getFeed(url) {
    return getRssFeed(url)
  }

  handleChange = (e) => {
    this.setState({  url: e.target.value })
  }

  resetState() {
    this.setState({ url: '' })
  }

  onClickAddFeed = (e) => {
    e.preventDefault()

    if (this.state.url.match(/(https?:\/\/[^\s]+)/g)) {
      this.getFeed(this.state.url).then(response => {
        
        if (response.status === 200) {
          response.json().then(res => {
            
            if (res.status === 'ok') {
              this.props.dispatchAddFeed(res)
            }

          })
        }

      }).catch(function (e) {
        console.log('Fetch Error ', e)
      })
    } else {
      this.resetState()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ url: '' })
  }

  render() {
    return(
      <Container>
        <form style={{ marginBottom: '20px' }} >
          <TextField placeholder="Enter feed url" name="feedSearch" value={this.state.url} handleChange={this.handleChange} />
          <Button type="submit" onClickAddFeed={this.onClickAddFeed} style={{ margin : '10px' }}>Search</Button>
        </form>  
        {this.renderFeeds()}  
      </Container>
    )
  }
}

const mapStateToProps = ({ feeds, activeId }) => {
  return {
    feeds,
    activeId
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchRemoveFeed: index => dispatch(removeFeed(index)),
    dispatchSetActiveByIndex: index => dispatch(setActiveFeedbyIndex(index)),
    dispatchAddFeed: url => dispatch(addFeed(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer)