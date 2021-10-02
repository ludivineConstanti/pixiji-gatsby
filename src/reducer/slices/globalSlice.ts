import { createSlice } from "@reduxjs/toolkit"

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    email: "",
    cheating: true,
    color: {
      previous: "#0A2846",
      darker: "#0A2846",
      main: "#0A2846",
      lighter: "#0A2846",
    },
    menuIsOpen: false,
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
  },
})

// Action creators are generated for each case reducer function
export const { updateEmail, updateCheating, updateColor, updateMenuIsOpen } =
  globalSlice.actions

export default globalSlice.reducer
