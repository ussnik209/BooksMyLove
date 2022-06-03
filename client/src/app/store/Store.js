import { configureStore } from 'redux'
import logger from 'redux-logger'

import BooksApp from '../reducers/BooksAppReducer'

const Store = configureStore({ 
  BooksApp,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default Store