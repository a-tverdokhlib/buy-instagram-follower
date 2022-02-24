import { createReducer } from '@reduxjs/toolkit'

import { setScrollPosition, setType } from './actions'

type FollowerState = {
  followerType: string
  scrollPosition: number
}

const initialState: FollowerState = {
  followerType: 'highQuality',
  scrollPosition: 0,
}

export const followersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setType, (state, action) => {
      state.followerType = action.payload
    })
    .addCase(setScrollPosition, (state, action) => {
      state.scrollPosition = action.payload
    })
})
