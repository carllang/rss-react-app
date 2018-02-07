import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createHashHistory } from 'history'
import thunk from 'redux-thunk';
import './app.style'
import reducer, { loadFeeds, LOAD_FEEDS } from './ducks/rss'
import App from './containers/HomePage';
import theme from './theme'

const history = createHashHistory()
const router = routerMiddleware(history)

// Create Store
const store = createStore(reducer, applyMiddleware(thunk, logger, router))

store.dispatch(loadFeeds(LOAD_FEEDS))

const render = (Component) => {
  ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component />
        </Provider> 
      </ThemeProvider>,
    document.getElementById('root')
  )
}

render(App);