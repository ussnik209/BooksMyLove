import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import BooksApp from '../reducers/booksAppReducer.js'

const store = configureStore({ 
  reducer: BooksApp,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store