import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "src/reducer"

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
