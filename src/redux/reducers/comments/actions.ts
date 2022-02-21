import { createAction } from '@reduxjs/toolkit'

export const setType = createAction<string>('comments/setType')
export const setScrollPosition = createAction<number>(
  'comments/setScrollPosition',
)
