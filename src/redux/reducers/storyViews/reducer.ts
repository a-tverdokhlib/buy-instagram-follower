import { createReducer } from '@reduxjs/toolkit'

import { setPlan, setScrollPosition } from './actions'

type StoryViewState = {
  plan: any
  scrollPosition: number
}

const initialState: StoryViewState = {
  plan: {},
  scrollPosition: 0,
}

export const storyViewsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPlan, (state, action) => {
      state.plan = action.payload
    })
    .addCase(setScrollPosition, (state, action) => {
      state.scrollPosition = action.payload
    })
})
