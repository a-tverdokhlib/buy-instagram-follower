import { createAction } from '@reduxjs/toolkit'

export const setAutoLikePacks = createAction<any>(
  'admin/autoLikePacks/setAutoLikePacks',
)
export const addAutoLikePack = createAction<any>(
  'admin/autoLikePacks/addAutoLikePack',
)
export const removeAutoLikePack = createAction<any>(
  'admin/autoLikePacks/removeAutoLikePack',
)
export const removeAutoLikePacks = createAction<any>(
  'admin/autoLikePacks/removeAutoLikePacks',
)
export const updateAutoLikePack = createAction<any>(
  'admin/autoLikePacks/updateAutoLikePack',
)
export const deactiveAutoLikePacks = createAction<any>(
  'admin/autoLikePacks/deactiveAutoLikePacks',
)
export const activeAutoLikePacks = createAction<any>(
  'admin/autoLikePacks/activeAutoLikePacks',
)
