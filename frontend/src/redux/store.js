import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './slices/postsSlice.js'

const store = configureStore({
  reducer: {
    posts: postsReducer
  }
})

export default store