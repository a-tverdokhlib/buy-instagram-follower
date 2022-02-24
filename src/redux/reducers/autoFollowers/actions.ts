import { createAction } from '@reduxjs/toolkit'

export const setPlan = createAction<any>('autoFollowers/setPlan')
export const setSubscriptionPlan = createAction<any>(
  'autoFollowers/setSubscriptionPlan',
)
export const setInstagramAccount = createAction<string>(
  'autoFollowers/setInstagramAccount',
)
export const setPrice = createAction<number>('autoFollowers/setPrice')
export const setScrollPosition = createAction<number>(
  'autoFollowers/setScrollPosition',
)
