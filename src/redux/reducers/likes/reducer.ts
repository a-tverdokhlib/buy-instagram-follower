import { createReducer } from '@reduxjs/toolkit'

import { setScrollPosition, setType } from './actions'

type LikeState = {
  likeType: string
  scrollPosition: number
}

const initialState: LikeState = {
  likeType: 'highQuality',
  scrollPosition: 0,
}

export const likesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setType, (state, action) => {
      state.likeType = action.payload
    })
    .addCase(setScrollPosition, (state, action) => {
      state.scrollPosition = action.payload
    })
})
