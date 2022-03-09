import { createReducer } from '@reduxjs/toolkit'

import { addCategory, removeCategory, setCategories } from './actions'

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
})
