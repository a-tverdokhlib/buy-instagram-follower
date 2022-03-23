import { createReducer } from '@reduxjs/toolkit'

import {
  activeAutoLikePacks,
  addAutoLikePack,
  deactiveAutoLikePacks,
  removeAutoLikePack,
  removeAutoLikePacks,
  setAutoLikePacks,
  updateAutoLikePack,
} from './actions'

type AdminAutoLikePackState = {
  autoLikePacks: any[]
}

const initialState: AdminAutoLikePackState = {
  autoLikePacks: [],
}

export const adminAutoLikePackReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(setAutoLikePacks, (state, action) => {
      state.autoLikePacks = action.payload
    })
    builder.addCase(addAutoLikePack, (state, action) => {
      state.autoLikePacks = [...state.autoLikePacks, action.payload]
    })
    builder.addCase(removeAutoLikePack, (state, action) => {
      const autoLikePack = action.payload
      const autoLikePackList = [
        ...state.autoLikePacks.filter((item) => item._id !== autoLikePack._id),
      ]
      state.autoLikePacks = autoLikePackList
    })
    builder.addCase(removeAutoLikePacks, (state, action) => {
      const removedIds = action.payload
      const autoLikePackList = [
        ...state.autoLikePacks.filter((item) => !removedIds.includes(item._id)),
      ]
      state.autoLikePacks = autoLikePackList
    })
    builder.addCase(updateAutoLikePack, (state, action) => {
      const autoLikePack = action.payload
      const autoLikePackList = [
        ...state.autoLikePacks.map((item) => {
          if (item._id === autoLikePack._id) {
            item.name = autoLikePack.name
            item.coupanCode = autoLikePack.coupanCode
            item.coupanDiscount = autoLikePack.coupanDiscount
            item.content = autoLikePack.content
            item.checkoutCode = autoLikePack.checkoutCode
            item.keyFeatures = autoLikePack.keyFeatures
            item.price = autoLikePack.price
            item.isActive = autoLikePack.isActive
            item.imageUrl = autoLikePack.imageUrl
            item.urlSlug = autoLikePack.urlSlug
            item.pageTitle = autoLikePack.pageTitle
            item.metaKeywords = autoLikePack.metaKeywords
            item.metaDescription = autoLikePack.metaDescription
            item.newPost = autoLikePack.newPost
            item.apiProviderId = autoLikePack.apiProviderId
            item.serviceItems = autoLikePack.serviceItems
            return item
          } else {
            return item
          }
        }),
      ]
    })
    builder.addCase(deactiveAutoLikePacks, (state, action) => {
      const deactivatedIds = action.payload
      const autoLikePackList = [
        ...state.autoLikePacks.map((item) => {
          if (deactivatedIds.includes(item._id)) {
            item.isActive = false
            return item
          } else {
            return item
          }
        }),
      ]
    })
    builder.addCase(activeAutoLikePacks, (state, action) => {
      const activatedIds = action.payload
      const autoLikePackList = [
        ...state.autoLikePacks.map((item) => {
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
