import { createReducer } from '@reduxjs/toolkit'

import {
  activeServices,
  addService,
  deactiveServices,
  removeService,
  removeServices,
  setServices,
  updateService,
} from './actions'

type AdminServiceState = {
  services: {}
}

const initialState: AdminServiceState = {
  services: {},
}

export const adminServiceReducer = createReducer(initialState, (builder) => {
  builder.addCase(setServices, (state, action) => {
    state.services = {
      ...state.services,
      [action.payload.key]: action.payload.data,
    }
  })
  // builder.addCase(addService, (state, action) => {
  //   state.services = {
  //     ...state.services,
  //     [action.payload.key]: action.payload.data,
  //   }
  // })
})
