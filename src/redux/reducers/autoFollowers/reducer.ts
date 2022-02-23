import { createReducer } from '@reduxjs/toolkit'

import { setPlan, setScrollPosition } from './actions'

type AutoFollowerState = {
  plan: any
  subscriptionPlan: any
  instagramAccount: string
  price: number
  scrollPosition: number
}

const initialState: AutoFollowerState = {
  plan: {},
  subscriptionPlan: {},
  instagramAccount: '',
  price: 0,
  scrollPosition: 0,
}

export const autoFollowersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPlan, (state, action) => {
      state.plan = action.payload
    })
    .addCase(setScrollPosition, (state, action) => {
      state.scrollPosition = action.payload
    })
})
