import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { updateMenuIsOpen } from "src/reducer/slices/globalSlice"
import { useAppDispatch, useAppSelector } from "src/store"
import { tMLLetterSpacing } from "src/styles/typo"
import SMenuLink, { SMenuButton } from "./SMenuLink"

interface MenuLinkProps {
  text: string
  path?: string
  onClick?: () => void
}

const MenuLink = ({ path = "", text, onClick = () => {} }: MenuLinkProps) => {
  const dispatch = useAppDispatch()

  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  const colorMain = useAppSelector(state => state.global.color.main)

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
        dispatch(updateMenuIsOpen(false))
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
        updateMenuIsOpen(false)
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

export default MenuLink
