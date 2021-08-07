import { configureStore } from "@reduxjs/toolkit"
import reducer from "src/reducer"

export const store = configureStore({
  reducer,
  devTools: true,
})
