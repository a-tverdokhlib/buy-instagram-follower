import { createAction } from '@reduxjs/toolkit'

export const setPlan = createAction<string>('growth/setPlan')
export const setScrollPosition = createAction<number>(
  'growth/setScrollPosition',
)
