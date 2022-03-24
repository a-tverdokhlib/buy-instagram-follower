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

type AdminOtherServiceState = {
  services: any[]
}

const initialState: AdminOtherServiceState = {
  services: [],
}

export const adminOtherServiceReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(setServices, (state, action) => {
      state.services = action.payload
    })
    builder.addCase(addService, (state, action) => {
      state.services = [...state.services, action.payload]
    })
    builder.addCase(removeService, (state, action) => {
      const service = action.payload
      const serviceList = [
        ...state.services.filter((item) => item._id !== service._id),
      ]
      state.services = serviceList
    })
    builder.addCase(removeServices, (state, action) => {
      const removedIds = action.payload
      const serviceList = [
        ...state.services.filter((item) => !removedIds.includes(item._id)),
      ]
      state.services = serviceList
    })
    builder.addCase(updateService, (state, action) => {
      const service = action.payload
      const serviceList = [
        ...state.services.map((item) => {
          if (item._id === service._id) {
            item.name = service.name
            item.minQuantity = service.minQuantity
            item.maxQuantity = service.maxQuantity
            item.priceList = service.priceList
            item.apiProviderId = service.apiProviderId
            item.serviceItem = service.serviceItem
            item.rate = service.rate
            item.min = service.min
            item.max = service.max
            item.isActive = service.isActive
            return item
          } else {
            return item
          }
        }),
      ]
    })
    builder.addCase(deactiveServices, (state, action) => {
      const deactivatedIds = action.payload
      const serviceList = [
        ...state.services.map((item) => {
          if (deactivatedIds.includes(item._id)) {
            item.isActive = false
            return item
          } else {
            return item
          }
        }),
      ]
    })
    builder.addCase(activeServices, (state, action) => {
      const activatedIds = action.payload
      const serviceList = [
        ...state.services.map((item) => {
          if (activatedIds.includes(item._id)) {
            item.isActive = true
            return item
          } else {
            return item
          }
        }),
      ]
    })
  },
)
