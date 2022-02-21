import { createReducer } from '@reduxjs/toolkit'

import { setScrollPosition, setType } from './actions'

type ViewState = {
  viewType: string
  scrollPosition: number
}

const initialState: ViewState = {
  viewType: 'highQuality',
  scrollPosition: 0,
}

export const viewsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setType, (state, action) => {
      state.viewType = action.payload
    })
    .addCase(setScrollPosition, (state, action) => {
      state.scrollPosition = action.payload
    })
})
