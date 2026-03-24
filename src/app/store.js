import { configureStore, combineReducers } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'

export const store = configureStore({
  reducer: combineReducers({
    posts: postsReducer
  })
})