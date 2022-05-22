import React from "react"

import { updateMenuIsOpen } from "src/reducer/slices/globalSlice"
import { useAppDispatch, useAppSelector } from "src/store"
import { MenuOrCloseIcon } from "src/components"

const MenuIcon = () => {
  const dispatch = useAppDispatch()
  const menuIsOpen = useAppSelector(state => state.global.menuIsOpen)

  return (
    <MenuOrCloseIcon
      onClick={() => {
        dispatch(updateMenuIsOpen(!menuIsOpen))
      }}
      showsCloseButton={menuIsOpen}
    />
  )
}

export default MenuIcon
