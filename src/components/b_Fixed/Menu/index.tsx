import React from "react"
import { AnimatePresence } from "framer-motion"

import MenuIcon from "./MenuIcon"
import MenuLinks from "./MenuLinks"
import MenuSettings from "./MenuSettings"
import SMenu, { SContent, variants } from "./SMenu"
import { useAppSelector } from "src/store"

interface MenuProps {
  isPlaying: boolean
}

const Menu = ({ isPlaying }: MenuProps) => {
  const menuIsOpen = useAppSelector(state => state.global.menuIsOpen)

  return (
    <SMenu>
      <AnimatePresence exitBeforeEnter>
        {menuIsOpen && (
          <SContent
            variants={variants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <MenuLinks />
            <MenuSettings isPlaying={isPlaying} />
          </SContent>
        )}
      </AnimatePresence>
      <MenuIcon />
    </SMenu>
  )
}

export default Menu
