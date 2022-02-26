import { createReducer } from '@reduxjs/toolkit'

import {
  setInstagramAccount,
  setPlan,
  setPrice,
  setScrollPosition,
  setSubscriptionPlan,
} from './actions'

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
    .addCase(setSubscriptionPlan, (state, action) => {
      state.subscriptionPlan = action.payload
    })
    .addCase(setInstagramAccount, (state, action) => {
      state.instagramAccount = action.payload
    })
    .addCase(setPrice, (state, action) => {
      state.price = action.payload
    })
})
