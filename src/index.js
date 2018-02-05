import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/HomePage';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { routerMiddleware } from 'react-router-redux'
//import "../node_modules/font-awesome/css/font-awesome.min.css";
import './app.style'
import { createStore, applyMiddleware } from 'redux'
import feedme from './ducks/rss'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createHashHistory } from 'history'
const history = createHashHistory()
const router = routerMiddleware(history)

// Create Store
const store = createStore(feedme, applyMiddleware(logger, router))

const render = (Component) => {
  ReactDOM.render(
    
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component />
        </Provider> 
      </ThemeProvider>
    ,
    document.getElementById('root')
  )
}

render(App);