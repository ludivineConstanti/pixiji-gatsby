import React, { useState, useEffect } from "react"

import SMenuIcon, { SIconContainer, SIconStroke } from "./SMenuIcon"
import { updateMenuIsOpen } from "src/reducer/slices/globalSlice"
import { useAppDispatch, useAppSelector } from "src/store"
import {
  iVIconT,
  iVIconM,
  iVIconB,
  aVIconT,
  aVIconM,
  aVIconB,
} from "./animation"

const MenuIcon = () => {
  const dispatch = useAppDispatch()

  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  const colorMain = useAppSelector(state => state.global.color.main)
  const menuIsOpen = useAppSelector(state => state.global.menuIsOpen)

  const [vMenuIcon, setVMenuIcon] = useState({})
  const [vIcon, setVIcon] = useState({ t: iVIconT, m: iVIconM, b: iVIconB })

  useEffect(() => {
    setVIcon({
      t: {
        ...vIcon.t,
        animate: !menuIsOpen ? aVIconT.menuCloses : aVIconT.menuOpens,
      },
      m: {
        ...vIcon.m,
        animate: !menuIsOpen ? aVIconM.menuCloses : aVIconM.menuOpens,
      },
      b: {
        ...vIcon.b,
        animate: !menuIsOpen ? aVIconB.menuCloses : aVIconB.menuOpens,
      },
    })
  }, [menuIsOpen, colorMain])

  useEffect(() => {
    setVMenuIcon({
      ...vMenuIcon,
      animate: !menuIsOpen
        ? { backgroundColor: "#fff" }
        : { backgroundColor: colorMain },
    })
  }, [menuIsOpen])

  useEffect(() => {
    setVMenuIcon({
      ...vMenuIcon,
      animate: !menuIsOpen
        ? { backgroundColor: "#fff" }
        : { backgroundColor: colorMainL1 },
    })
  }, [colorMain])

  return (
    <SMenuIcon
      type="button"
      onClick={() => {
        dispatch(updateMenuIsOpen(!menuIsOpen))
      }}
      variants={vMenuIcon}
      initial="initial"
      animate="animate"
      onMouseEnter={() => {
        if (menuIsOpen) {
          setVMenuIcon({
            ...vMenuIcon,
            animate: { backgroundColor: colorMain },
          })
        }
      }}
      onMouseLeave={() => {
        if (menuIsOpen) {
          setVMenuIcon({
            ...vMenuIcon,
            animate: { backgroundColor: colorMainL1 },
          })
        }
      }}
    >
      <SIconContainer>
        <SIconStroke
          variants={vIcon.t}
          s={{ colorMain: menuIsOpen ? "#FFF" : colorMain }}
          key="SIconStrokeTop"
        />
        <SIconStroke
          variants={vIcon.m}
          s={{ colorMain }}
          key="SIconStrokeMiddle"
        />
        <SIconStroke
          variants={vIcon.b}
          s={{ colorMain: menuIsOpen ? "#FFF" : colorMain }}
          key="SIconStrokeBottom"
        />
      </SIconContainer>
    </SMenuIcon>
  )
}

export default MenuIcon
