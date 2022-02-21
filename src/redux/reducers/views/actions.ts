import { createAction } from '@reduxjs/toolkit'

export const setType = createAction<string>('views/setType')
export const setScrollPosition = createAction<number>('views/setScrollPosition')
