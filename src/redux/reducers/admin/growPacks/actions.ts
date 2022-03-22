import { createAction } from '@reduxjs/toolkit'

export const setGrowPacks = createAction<any>('admin/growPacks/setGrowPacks')
export const addGrowPack = createAction<any>('admin/growPacks/addGrowPack')
export const removeGrowPack = createAction<any>(
  'admin/growPacks/removeGrowPack',
)
export const removeGrowPacks = createAction<any>(
  'admin/growPacks/removeGrowPacks',
)
export const updateGrowPack = createAction<any>(
  'admin/growPacks/updateGrowPack',
)
export const deactiveGrowPacks = createAction<any>(
  'admin/growPacks/deactiveGrowPacks',
)
export const activeGrowPacks = createAction<any>(
  'admin/growPacks/activeGrowPacks',
)
