import { createAction } from '@reduxjs/toolkit'

export const setFAQs = createAction<any>('admin/FAQs/setFAQs')
export const addFAQ = createAction<any>('admin/FAQs/addFAQ')
export const removeFAQ = createAction<any>('admin/FAQs/removeFAQ')
export const removeFAQs = createAction<any>('admin/FAQs/removeFAQs')
export const updateFAQ = createAction<any>('admin/FAQs/updateFAQ')
export const deactiveFAQs = createAction<any>('admin/FAQs/deactiveFAQs')
export const activeFAQs = createAction<any>('admin/FAQs/activeFAQs')
