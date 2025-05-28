import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './users/usersSlice'
import { filtersReduser } from './filters/filtersSlice'

export const store = configureStore({
    reducer: {
      users: usersReducer,
      filters: filtersReduser,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch