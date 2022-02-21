import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import type { Reducer } from 'react'

import { followersReducer } from '@/redux/reducers/followers'
import { likesReducer } from '@/redux/reducers/likes'
import { viewsReducer } from '@/redux/reducers/views'

const combinedReducer = combineReducers({
  followers: followersReducer,
  likes: likesReducer,
  views: viewsReducer,
})

const reducer: Reducer<ReturnType<typeof combinedReducer>, AnyAction> | any = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction,
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action['payload'], // apply delta from hydration
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
    reducer,
  })

type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store['dispatch']
export type RootState = ReturnType<Store['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper(makeStore, { debug: true })
