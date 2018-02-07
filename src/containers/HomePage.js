import React from 'react'

import PageLayout from './PageLayout'
import SideBarContainer from './SidebarContainer'
import ActiveFeedContainer from './ActiveFeedContainer'


const HomePage = () => 
  <PageLayout>
    <SideBarContainer />
    <ActiveFeedContainer />
  </PageLayout>


export default HomePage