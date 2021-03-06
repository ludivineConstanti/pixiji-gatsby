/* eslint-disable import/no-named-as-default */
import { combineReducers } from "redux"

import globalSlice from "./slices/globalSlice"
import quizSlice from "./slices/quizSlice"

// We export the result of all the combined reducers
// to use it in createStore

export const rootReducer = combineReducers({
  global: globalSlice,
  quiz: quizSlice,
})

// Everything is combined in a new state
