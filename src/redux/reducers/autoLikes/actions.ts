import { createAction } from '@reduxjs/toolkit'

export const setPlan = createAction<any>('autoLikes/setPlan')
export const setScrollPosition = createAction<number>(
  'autoLikes/setScrollPosition',
)
