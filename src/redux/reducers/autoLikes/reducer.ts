import { createReducer } from '@reduxjs/toolkit'

import { setPlan, setScrollPosition } from './actions'

type AutoLikeState = {
  plan: any
  scrollPosition: number
}

const initialState: AutoLikeState = {
  plan: {},
  scrollPosition: 0,
}

export const autoLikesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPlan, (state, action) => {
      state.plan = action.payload
    })
    .addCase(setScrollPosition, (state, action) => {
      state.scrollPosition = action.payload
    })
})
