import React from 'react'
import { Provider } from 'react-redux'

import store from './store/store.js'
import Routes from './routes/Routes.jsx'

const BooksMyLoveApp = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default BooksMyLoveApp