import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootApi } from '../features/api/rootApi'
import { searchApi } from '../features/searchF/searchApi'
import searchSlice from '../features/searchF/searchSlice'


export const store = configureStore({
  reducer: {
    [searchApi.reducerPath] :searchApi.reducer,
  
   searchUsers : searchSlice
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(searchApi.middleware)
})