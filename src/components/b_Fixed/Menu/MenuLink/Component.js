// == Import npm
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

// == Import
import { tMLLetterSpacing } from "src/styles/typo"
import SMenuLink, { SMenuButton } from "./SMenuLink"

const MenuLink = ({
  path,
  text,
  colorMainL1,
  colorMain,
  updateValueGlobal,
  onClick,
}) => {
  const [vMenuLink, setVMenuLink] = useState({
    initial: { letterSpacing: "0px" },
    animate: { letterSpacing: `${tMLLetterSpacing}px` },
    whileHover: {
      color: colorMain,
      letterSpacing: `${tMLLetterSpacing * 2}px`,
    },
  })

  const [vSquare, setVSquare] = useState({
    initial: { backgroundColor: colorMainL1 },
    whileHover: { backgroundColor: colorMain },
  })

  useEffect(() => {
    setVSquare({
      ...vSquare,
      animate: { ...vSquare.animate, backgroundColor: colorMainL1 },
      whileHover: { ...vSquare.whileHover, backgroundColor: colorMain },
    })
    setVMenuLink({
      ...vMenuLink,
      animate: { ...vMenuLink.animate, color: colorMainL1 },
      whileHover: { ...vMenuLink.whileHover, color: colorMain },
    })
  }, [colorMain])

  return path ? (
    <SMenuLink
      to={path}
      onClick={() => {
        updateValueGlobal({ prop: ["menuIsOpen"], value: [false] })
      }}
      s={{ colorMainL1 }}
      variants={vMenuLink}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
    >
      <motion.div variants={vSquare} className="menuLink__square" />
      {text}
    </SMenuLink>
  ) : (
    <SMenuButton
      onClick={() => {
        onClick()
        updateValueGlobal({ prop: ["menuIsOpen"], value: [false] })
      }}
      s={{ colorMainL1 }}
      variants={vMenuLink}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
    >
      <motion.div variants={vSquare} className="menuLink__square" />
      {text}
    </SMenuButton>
  )
}

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  colorMainL1: PropTypes.string.isRequired,
  colorMain: PropTypes.string.isRequired,
  updateValueGlobal: PropTypes.func.isRequired,
  path: PropTypes.string,
  onClick: PropTypes.func,
}

MenuLink.defaultProps = {
  path: "",
  onClick: () => {},
}

// == Export
export default MenuLink
