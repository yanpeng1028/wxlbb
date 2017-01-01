import 'babel-polyfill'
import "../public/style/swiper.less"
import "../public/style/pp2015.css"
import "../public/style/index.less"

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import routes from './routes'
import configureStore from './stores/configureStore'

const store = configureStore();
render((
  <Provider store={store}>
    <Router history={hashHistory}  routes={routes} />
   </Provider>),
  document.getElementById('root')
)
