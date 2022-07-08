import { createSlice } from "@reduxjs/toolkit"

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    email: "",
    cheating: true,
    color: {
      previous: "#0A2846",
      main: "#0A2846",
      lighter: "#0A2846",
    },
    menuIsOpen: false,
    idSelectedKanji: false as boolean | number,
  },

  reducers: {
    updateEmail: (state, { payload }: { payload: string }) => {
      state.email = payload
    },
    updateCheating: (state, { payload }: { payload: boolean }) => {
      state.cheating = payload
    },
    updateColor: (
      state,
      {
        payload,
      }: {
        payload: {
          previous?: string
          darker?: string
          main?: string
          lighter?: string
        }
      }
    ) => {
      state.color = { ...state.color, previous: state.color.main, ...payload }
    },
    updateMenuIsOpen: (state, { payload }: { payload: boolean }) => {
      state.menuIsOpen = payload
    },
    updateIdSelectedKanji: (
      state,
      { payload }: { payload: boolean | number }
    ) => {
      state.idSelectedKanji = payload
      state.menuIsOpen = false
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  updateEmail,
  updateCheating,
  updateColor,
  updateMenuIsOpen,
  updateIdSelectedKanji,
} = globalSlice.actions

export default globalSlice.reducer
