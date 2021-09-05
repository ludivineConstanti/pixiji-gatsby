// == Import npm
import React from "react"
import PropTypes from "prop-types"
import { AnimatePresence } from "framer-motion"

// == Import
import MenuIcon from "./MenuIcon"
import MenuLinks from "./MenuLinks"
import MenuSettings from "./MenuSettings"
import SMenu, { SContent, variants } from "./SMenu"

const Menu = ({ menuIsOpen, isPlaying }) => (
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

Menu.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
}

// == Export
export default Menu
