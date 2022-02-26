import { createReducer } from '@reduxjs/toolkit'

import { setScrollPosition } from './actions'

type BlogState = {
  scrollPosition: number
}

const initialState: BlogState = {
  scrollPosition: 0,
}

export const blogReducer = createReducer(initialState, (builder) => {
  builder.addCase(setScrollPosition, (state, action) => {
    state.scrollPosition = action.payload
  })
})
