import { createAction } from '@reduxjs/toolkit'

export const setType = createAction<string>('customComments/setType')
export const setScrollPosition = createAction<number>(
  'customComments/setScrollPosition',
)
