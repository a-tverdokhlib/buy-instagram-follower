import { createAction } from '@reduxjs/toolkit'

export const setPlan = createAction<any>('storyViews/setPlan')
export const setScrollPosition = createAction<number>(
  'storyViews/setScrollPosition',
)
