import { createAction } from '@reduxjs/toolkit'

export const setType = createAction<string>('likes/setType')
export const setScrollPosition = createAction<number>('likes/setScrollPosition')
