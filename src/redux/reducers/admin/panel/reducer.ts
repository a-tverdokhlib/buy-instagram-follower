import { createReducer } from '@reduxjs/toolkit'

import { setThemeMode } from './actions'

type AdminPanelState = {
  themeMode: string
}

const initialState: AdminPanelState = {
  themeMode: 'day',
}

export const adminPanelReducer = createReducer(initialState, (builder) => {
  builder.addCase(setThemeMode, (state, action) => {
    state.themeMode = action.payload
  })
})
