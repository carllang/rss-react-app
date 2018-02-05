import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import PageLayout from './PageLayout'
import SideBarContainer from './SidebarContainer'
import ActiveFeedContainer from './ActiveFeedContainer'


class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PageLayout>
        <SideBarContainer />
        <ActiveFeedContainer />
      </PageLayout>
    )
  }
}

export default HomePage