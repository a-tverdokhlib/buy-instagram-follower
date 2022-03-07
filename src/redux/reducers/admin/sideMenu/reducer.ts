import { createReducer } from '@reduxjs/toolkit'

import { setSidebarColor, setSideMenuLayout } from './actions'

type SideMenuState = {
  layout: string
  sidebarColor: string
}

const initialState: SideMenuState = {
  layout: 'expanded',
  sidebarColor: 'light',
}

export const sideMenuReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSideMenuLayout, (state, action) => {
      state.layout = action.payload
    })
    .addCase(setSidebarColor, (state, action) => {
      state.sidebarColor = action.payload
    })
})
