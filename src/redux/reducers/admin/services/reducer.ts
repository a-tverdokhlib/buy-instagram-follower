import { createReducer } from '@reduxjs/toolkit'

import {
  activeServices,
  addService,
  deactiveServices,
  offerServices,
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
  builder.addCase(offerServices, (state, action) => {
    const { _ids, startDate, endDate, discount } = action.payload.data
    const categories = action.payload.filteredCategories
    console.log('Data =>', action.payload.data)
    console.log('Categories =>', categories)
    if (_ids.length === 0) {
      categories.map((category, id) => {
        const serviceList = [
          ...state.services[`${category._id}`].map((item) => {
            if (item.offer.length > 0) {
              item.offer[0].discount = discount
              item.offer[0].startDate = startDate
              item.offer[0].endDate = endDate
            } else {
              item.offer = [
                { discount: discount, startDate: startDate, endDate: endDate },
              ]
            }
            return item
          }),
        ]
      })
    } else {
      _ids.map((offeredService, id) => {
        const serviceList = [
          ...state.services[`${offeredService.categoryId}`].map((item) => {
            if (item._id === offeredService._id) {
              console.log('Item =>', item)
              if (item.offer.length > 0) {
                item.offer[0].discount = discount
                item.offer[0].startDate = startDate
                item.offer[0].endDate = endDate
              } else {
                item.offer = [
                  {
                    discount: discount,
                    startDate: startDate,
                    endDate: endDate,
                  },
                ]
              }
              return item
            } else {
              return item
            }
          }),
        ]
      })
    }
  })
})
