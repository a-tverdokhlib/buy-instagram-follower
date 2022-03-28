import { createReducer } from '@reduxjs/toolkit'

import {
  activeFAQs,
  addFAQ,
  deactiveFAQs,
  removeFAQ,
  removeFAQs,
  setFAQs,
  updateFAQ,
} from './actions'

type AdminFAQState = {
  FAQs: any[]
}

const initialState: AdminFAQState = {
  FAQs: [],
}

export const adminFAQReducer = createReducer(initialState, (builder) => {
  builder.addCase(setFAQs, (state, action) => {
    state.FAQs = action.payload
  })
  builder.addCase(addFAQ, (state, action) => {
    state.FAQs = [...state.FAQs, action.payload]
  })
  builder.addCase(removeFAQ, (state, action) => {
    const FAQ = action.payload
    const FAQList = [...state.FAQs.filter((item) => item._id !== FAQ._id)]
    state.FAQs = FAQList
  })
  builder.addCase(removeFAQs, (state, action) => {
    const removedIds = action.payload
    const FAQList = [
      ...state.FAQs.filter((item) => !removedIds.includes(item._id)),
    ]
    state.FAQs = FAQList
  })
  builder.addCase(updateFAQ, (state, action) => {
    const FAQ = action.payload
    const FAQList = [
      ...state.FAQs.map((item) => {
        if (item._id === FAQ._id) {
          item.question = FAQ.question
          item.answer = FAQ.answer
          item.isActive = FAQ.isActive
          item.sort = FAQ.sort
          return item
        } else {
          return item
        }
      }),
    ]
  })
  builder.addCase(deactiveFAQs, (state, action) => {
    const deactivatedIds = action.payload
    const FAQList = [
      ...state.FAQs.map((item) => {
        if (deactivatedIds.includes(item._id)) {
          item.isActive = false
          return item
        } else {
          return item
        }
      }),
    ]
  })
  builder.addCase(activeFAQs, (state, action) => {
    const activatedIds = action.payload
    const FAQList = [
      ...state.FAQs.map((item) => {
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
