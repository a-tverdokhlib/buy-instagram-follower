import { createReducer } from '@reduxjs/toolkit'

import {
  activePackageFAQs,
  addPackageFAQ,
  deactivePackageFAQs,
  removePackageFAQ,
  removePackageFAQs,
  setPackageFAQs,
  updatePackageFAQ,
} from './actions'

type AdminPackageFAQState = {
  packageFAQs: {}
}

const initialState: AdminPackageFAQState = {
  packageFAQs: {},
}

export const adminPackageFAQReducer = createReducer(initialState, (builder) => {
  builder.addCase(setPackageFAQs, (state, action) => {
    state.packageFAQs = {
      ...state.packageFAQs,
      [action.payload.categoryId]: action.payload.data,
    }
  })
  builder.addCase(addPackageFAQ, (state, action) => {
    state.packageFAQs = {
      ...state.packageFAQs,
      [action.payload.categoryId]: [
        ...state.packageFAQs[`${action.payload.categoryId}`],
        action.payload.data,
      ],
    }
  })
  builder.addCase(removePackageFAQ, (state, action) => {
    const service = action.payload
    const packageFAQList = [
      ...state.packageFAQs[`${service.categoryId}`].filter(
        (item) => item._id !== service._id,
      ),
    ]
    state.packageFAQs = {
      ...state.packageFAQs,
      [action.payload.categoryId]: packageFAQList,
    }
  })
  builder.addCase(removePackageFAQs, (state, action) => {
    const removedIds = action.payload
    removedIds.map((removedItem, id) => {
      state.packageFAQs = {
        ...state.packageFAQs,
        [removedItem.categoryId]: state.packageFAQs[
          `${removedItem.categoryId}`
        ].filter((item) => item._id !== removedItem._id),
      }
    })
  })
  builder.addCase(updatePackageFAQ, (state, action) => {
    const oldCategoryId = action.payload.oldCategoryId
    const service = action.payload.data

    if (oldCategoryId !== service.categoryId) {
      const oldPackageFAQList = [
        ...state.packageFAQs[`${oldCategoryId}`].filter(
          (item) => item._id !== service._id,
        ),
      ]
      state.packageFAQs = {
        ...state.packageFAQs,
        [oldCategoryId]: oldPackageFAQList,
        [service.categoryId]: [
          ...state.packageFAQs[`${service.categoryId}`],
          service,
        ],
      }
    } else {
      const packageFAQList = [
        ...state.packageFAQs[`${oldCategoryId}`].map((item) => {
          if (item._id === service._id) {
            item.question = service.question
            item.answer = service.answer
            item.isActive = service.isActive
            return item
          } else {
            return item
          }
        }),
      ]
    }
  })
  builder.addCase(deactivePackageFAQs, (state, action) => {
    const deactiveIds = action.payload
    deactiveIds.map((deactiveItem, id) => {
      const packageFAQList = [
        ...state.packageFAQs[`${deactiveItem.categoryId}`].map((item) => {
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
  builder.addCase(activePackageFAQs, (state, action) => {
    const deactiveIds = action.payload
    deactiveIds.map((deactiveItem, id) => {
      const packageFAQList = [
        ...state.packageFAQs[`${deactiveItem.categoryId}`].map((item) => {
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
