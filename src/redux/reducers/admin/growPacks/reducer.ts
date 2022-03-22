import { createReducer } from '@reduxjs/toolkit'

import {
  activeGrowPacks,
  addGrowPack,
  deactiveGrowPacks,
  removeGrowPack,
  removeGrowPacks,
  setGrowPacks,
  updateGrowPack,
} from './actions'

type AdminGrowPackState = {
  growPacks: any[]
}

const initialState: AdminGrowPackState = {
  growPacks: [],
}

export const adminGrowPackReducer = createReducer(initialState, (builder) => {
  builder.addCase(setGrowPacks, (state, action) => {
    state.growPacks = action.payload
  })
  builder.addCase(addGrowPack, (state, action) => {
    state.growPacks = [...state.growPacks, action.payload]
  })
  builder.addCase(removeGrowPack, (state, action) => {
    const growPack = action.payload
    const growPackList = [
      ...state.growPacks.filter((item) => item._id !== growPack._id),
    ]
    state.growPacks = growPackList
  })
  builder.addCase(removeGrowPacks, (state, action) => {
    const removedIds = action.payload
    const growPackList = [
      ...state.growPacks.filter((item) => !removedIds.includes(item._id)),
    ]
    state.growPacks = growPackList
  })
  builder.addCase(updateGrowPack, (state, action) => {
    const growPack = action.payload
    const growPackList = [
      ...state.growPacks.map((item) => {
        if (item._id === growPack._id) {
          item.name = growPack.name
          item.coupanCode = growPack.coupanCode
          item.coupanDiscount = growPack.coupanDiscount
          item.content = growPack.content
          item.checkoutCode = growPack.checkoutCode
          item.keyFeatures = growPack.keyFeatures
          item.price = growPack.price
          item.isActive = growPack.isActive
          item.imageUrl = growPack.imageUrl
          item.urlSlug = growPack.urlSlug
          item.pageTitle = growPack.pageTitle
          item.metaKeywords = growPack.metaKeywords
          item.metaDescription = growPack.metaDescription
          item.newPost = growPack.newPost
          item.apiProviderId = growPack.apiProviderId
          item.serviceItems = growPack.serviceItems
          return item
        } else {
          return item
        }
      }),
    ]
  })
  builder.addCase(deactiveGrowPacks, (state, action) => {
    const deactivatedIds = action.payload
    const growPackList = [
      ...state.growPacks.map((item) => {
        if (deactivatedIds.includes(item._id)) {
          item.isActive = false
          return item
        } else {
          return item
        }
      }),
    ]
  })
  builder.addCase(activeGrowPacks, (state, action) => {
    const activatedIds = action.payload
    const growPackList = [
      ...state.growPacks.map((item) => {
        if (activatedIds.includes(item._id)) {
          item.isActive = true
          return item
        } else {
          return item
        }
      }),
    ]
  })
})
