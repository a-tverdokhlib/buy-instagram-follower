import { createReducer } from '@reduxjs/toolkit'

import {
  addCategory,
  removeCategories,
  removeCategory,
  setCategories,
  updateCategory,
} from './actions'

type AdminCategoryState = {
  categories: any[]
}

const initialState: AdminCategoryState = {
  categories: [],
}

export const adminCategoryReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCategories, (state, action) => {
    state.categories = action.payload
  })
  builder.addCase(addCategory, (state, action) => {
    state.categories = [...state.categories, action.payload]
  })
  builder.addCase(removeCategory, (state, action) => {
    const category = action.payload
    const categoryList = [
      ...state.categories.filter((item) => item._id !== category._id),
    ]
    state.categories = categoryList
  })
  builder.addCase(removeCategories, (state, action) => {
    const removedIds = action.payload
    const categoryList = [
      ...state.categories.filter((item) => !removedIds.includes(item._id)),
    ]
    state.categories = categoryList
  })
  builder.addCase(updateCategory, (state, action) => {
    const category = action.payload
    const categoryList = [
      ...state.categories.map((item) => {
        if (item._id === category._id) {
          item.name = category.name
          item.checkoutCode = category.checkoutCode
          item.requiredField = category.requiredField
          item.socialNetwork = category.socialNetwork
          item.defaultSortingNumber = category.defaultSortingNumber
          item.isActive = category.isActive
          item.offerDiscount = category.offerDiscount
          item.pageTitle = category.pageTitle
          item.urlSlug = category.urlSlug
          item.metaKeywords = category.metaKeywords
          item.metaDescription = category.metaDescription
          return item
        } else {
          return item
        }
      }),
    ]
  })
})
