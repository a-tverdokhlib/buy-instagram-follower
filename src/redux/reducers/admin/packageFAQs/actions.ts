import { createAction } from '@reduxjs/toolkit'

export const setPackageFAQs = createAction<any>(
  'admin/packageFAQs/setPackageFAQs',
)
export const addPackageFAQ = createAction<any>(
  'admin/packageFAQs/addPackageFAQ',
)
export const removePackageFAQ = createAction<any>(
  'admin/packageFAQs/removePackageFAQ',
)
export const removePackageFAQs = createAction<any>(
  'admin/packageFAQs/removePackageFAQs',
)
export const updatePackageFAQ = createAction<any>(
  'admin/packageFAQs/updatePackageFAQ',
)
export const deactivePackageFAQs = createAction<any>(
  'admin/packageFAQs/deactivePackageFAQs',
)
export const activePackageFAQs = createAction<any>(
  'admin/packageFAQs/activePackageFAQs',
)
