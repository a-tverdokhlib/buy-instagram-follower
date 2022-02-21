import { createReducer } from '@reduxjs/toolkit'

import { setScrollPosition, setType } from './actions'

type CommentState = {
  commentType: string
  scrollPosition: number
}

const initialState: CommentState = {
  commentType: 'highQuality',
  scrollPosition: 0,
}

export const commentsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setType, (state, action) => {
      state.commentType = action.payload
    })
    .addCase(setScrollPosition, (state, action) => {
      state.scrollPosition = action.payload
    })
})
