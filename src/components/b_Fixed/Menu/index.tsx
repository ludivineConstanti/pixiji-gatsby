import React from "react"

import MenuIcon from "./MenuIcon"
import MenuLinks from "./MenuLinks"
import MenuSettings from "./MenuSettings"
import { LeftPopUp } from "../.."
import { useAppSelector } from "src/store"

interface MenuProps {
  isPlaying: boolean
}

const Menu = ({ isPlaying }: MenuProps) => {
  const menuIsOpen = useAppSelector(state => state.global.menuIsOpen)

  return (
    <LeftPopUp isShowing={menuIsOpen} visibleChild={<MenuIcon />}>
      <>
        <MenuLinks />
        <MenuSettings isPlaying={isPlaying} />
      </>
    </LeftPopUp>
  )
}

export default Menu
