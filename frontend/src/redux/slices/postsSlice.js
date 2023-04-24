import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../axios/api.axios'

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await api.get('/posts');
    return response.data
  } catch (error) {
    return error
  }
})

const submitPost = createAsyncThunk('posts/submitPost', async ({ title, text }) => {
  try {
    const response = await api.post('/posts', {
      title,
      text
    })
    return response.data
  } catch (error) {
    return error
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    status: 'initialized',
    data: [],
    error: null,
  },
  reducers: {
    addPost: (state, action) => {
      console.log({ state, action })
      const { id, title, text, timestamp } = action.payload
      state.data.push({
        id,
        title,
        text,
        timestamp,
      })
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'loaded'
        state.data = [ ...action.payload ]
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(submitPost.fulfilled, (state, action) => {
        state.data.concat(action.payload)
      })
  },
})

const selectAllPosts = state => state.posts.data
const getPostsStatus = state => state.posts.status
const getPostsError = state => state.posts.error

export {
  fetchPosts,
  submitPost,
  getPostsError,
  getPostsStatus,
  selectAllPosts
}

export const { addPost } = postsSlice.actions

export default postsSlice.reducer

