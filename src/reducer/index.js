/* eslint-disable import/no-named-as-default */
import { combineReducers } from "redux"

import kanjisArrSlice from "./slices/kanjisArrSlice"
import globalSlice from "./slices/globalSlice"

// We export the result of all the combined reducers
// to use it in createStore

export default combineReducers({
  global: globalSlice,
  kanjisArr: kanjisArrSlice,
})

// Everything is combined in a new state
