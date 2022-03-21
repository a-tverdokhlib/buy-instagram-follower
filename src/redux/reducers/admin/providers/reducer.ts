import { createReducer } from '@reduxjs/toolkit'

import {
  activeProviders,
  addProvider,
  deactiveProviders,
  removeProvider,
  removeProviders,
  setProviders,
  updateProvider,
  updateProviderBalance,
} from './actions'

type AdminProviderState = {
  providers: any[]
}

const initialState: AdminProviderState = {
  providers: [],
}

export const adminProviderReducer = createReducer(initialState, (builder) => {
  builder.addCase(setProviders, (state, action) => {
    state.providers = action.payload
  })
  builder.addCase(addProvider, (state, action) => {
    state.providers = [...state.providers, action.payload]
  })
  builder.addCase(removeProvider, (state, action) => {
    const provider = action.payload
    const providerList = [
      ...state.providers.filter((item) => item._id !== provider._id),
    ]
    state.providers = providerList
  })
  builder.addCase(removeProviders, (state, action) => {
    const removedIds = action.payload
    const providerList = [
      ...state.providers.filter((item) => !removedIds.includes(item._id)),
    ]
    state.providers = providerList
  })
  builder.addCase(updateProvider, (state, action) => {
    const provider = action.payload
    const providerList = [
      ...state.providers.map((item) => {
        if (item._id === provider._id) {
          item.name = provider.name
          item.description = provider.description
          item.isActive = provider.isActive
          item.url = provider.url
          return item
        } else {
          return item
        }
      }),
    ]
  })
  builder.addCase(deactiveProviders, (state, action) => {
    const deactivatedIds = action.payload
    const providerList = [
      ...state.providers.map((item) => {
        if (deactivatedIds.includes(item._id)) {
          item.isActive = false
          return item
        } else {
          return item
        }
      }),
    ]
  })
  builder.addCase(activeProviders, (state, action) => {
    const activatedIds = action.payload
    const providerList = [
      ...state.providers.map((item) => {
        if (activatedIds.includes(item._id)) {
          item.isActive = true
          return item
        } else {
          return item
        }
      }),
    ]
  })
  builder.addCase(updateProviderBalance, (state, action) => {
    const provider = action.payload.provider
    const balanceInfo = action.payload.balanceInfo
    const providerList = [
      ...state.providers.map((item) => {
        if (item._id === provider._id) {
          item.balance = balanceInfo.balance
          return item
        } else {
          return item
        }
      }),
    ]
  })
})
