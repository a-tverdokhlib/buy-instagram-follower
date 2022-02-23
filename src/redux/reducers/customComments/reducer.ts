import { createReducer } from '@reduxjs/toolkit'

import { setScrollPosition, setType } from './actions'

type CustomCommentState = {
  commentType: string
  scrollPosition: number
}

const initialState: CustomCommentState = {
  commentType: 'highQuality',
  scrollPosition: 0,
}

export const customCommentsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setType, (state, action) => {
      state.commentType = action.payload
    })
    .addCase(setScrollPosition, (state, action) => {
      state.scrollPosition = action.payload
    })
})
