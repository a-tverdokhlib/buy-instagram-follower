import { createAction } from '@reduxjs/toolkit'

// export const increment = createAction('counter/increment')
// export const decrement = createAction('counter/decrement')
export const setType = createAction<string>('followers/setType')
export const setScrollPosition = createAction<number>(
  'followers/setScrollPosition',
)
