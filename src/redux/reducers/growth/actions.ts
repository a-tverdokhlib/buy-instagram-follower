import { createAction } from '@reduxjs/toolkit'

export const setPlan = createAction<any>('growth/setPlan')
export const setScrollPosition = createAction<number>(
  'growth/setScrollPosition',
)
