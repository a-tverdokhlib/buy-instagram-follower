import { createReducer } from '@reduxjs/toolkit'

import { setPlan, setScrollPosition } from './actions'

type GrowthState = {
  plan: string
  scrollPosition: number
}

const initialState: GrowthState = {
  plan: '',
  scrollPosition: 0,
}

export const growthReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPlan, (state, action) => {
      state.plan = action.payload
    })
    .addCase(setScrollPosition, (state, action) => {
      state.scrollPosition = action.payload
    })
})
