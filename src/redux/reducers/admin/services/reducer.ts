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
    console.log('CategoryID =>', action.payload.categoryId)
    console.log('ServiceData =>', action.payload.data)
    state.services = {
      ...state.services,
      [action.payload.categoryId]: action.payload.data,
    }
  })
  builder.addCase(addService, (state, action) => {
    state.services = {
      ...state.services,
      [action.payload.categoryId]: [
        ...state.services[`${action.payload.categoryId}`],
        action.payload.data,
      ],
    }
  })
  builder.addCase(removeService, (state, action) => {
    const service = action.payload
    const serviceList = [
      ...state.services[`${service.categoryId}`].filter(
        (item) => item._id !== service._id,
      ),
    ]
    state.services = {
      ...state.services,
      [action.payload.categoryId]: serviceList,
    }
  })
  builder.addCase(removeServices, (state, action) => {
    const removedIds = action.payload
    removedIds.map((removedItem, id) => {
      state.services = {
        ...state.services,
        [removedItem.categoryId]: state.services[
          `${removedItem.categoryId}`
        ].filter((item) => item._id !== removedItem._id),
      }
    })
  })
  builder.addCase(updateService, (state, action) => {
    const oldCategoryId = action.payload.oldCategoryId
    const service = action.payload.data

    if (oldCategoryId !== service.categoryId) {
      const oldServiceList = [
        ...state.services[`${oldCategoryId}`].filter(
          (item) => item._id !== service._id,
        ),
      ]
      state.services = {
        ...state.services,
        [oldCategoryId]: oldServiceList,
        [service.categoryId]: [
          ...state.services[`${service.categoryId}`],
          service,
        ],
      }
    } else {
      const serviceList = [
        ...state.services[`${oldCategoryId}`].map((item) => {
          if (item._id === service._id) {
            item.name = service.name
            item.parentPackId = service.parentPackId
            item.orderForId = service.orderForId
            item.coupanCode = service.coupanCode
            item.coupanDiscount = service.coupanDiscount
            item.quantity = service.quantity
            item.price = service.price
            item.isActive = service.isActive
            item.sortNumber = service.sortNumber
            item.imageUrl = service.imageUrl
            item.urlSlug = service.urlSlug
            item.pageTitle = service.pageTitle
            item.metaKeywords = service.metaKeywords
            item.metaDescription = service.metaDescription
            item.content = service.content
            item.isMostPopular = service.isMostPopular
            item.isShownInActiveTab = service.isShownInActiveTab
            item.isInstagramSaves = service.isInstagramSaves
            item.apiType = service.apiType
            item.variationDays = service.variationDays
            item.offPercent = service.offPercent
            item.isDefaultActive = service.isDefaultActive
            return item
          } else {
            return item
          }
        }),
      ]
    }
  })
  builder.addCase(deactiveServices, (state, action) => {
    const deactiveIds = action.payload
    deactiveIds.map((deactiveItem, id) => {
      const serviceList = [
        ...state.services[`${deactiveItem.categoryId}`].map((item) => {
          if (item._id === deactiveItem._id) {
            item.isActive = false
            return item
          } else {
            return item
          }
        }),
      ]
    })
  })
  builder.addCase(activeServices, (state, action) => {
    const deactiveIds = action.payload
    deactiveIds.map((deactiveItem, id) => {
      const serviceList = [
        ...state.services[`${deactiveItem.categoryId}`].map((item) => {
          if (item._id === deactiveItem._id) {
            item.isActive = true
            return item
          } else {
            return item
          }
        }),
      ]
    })
  })
})
