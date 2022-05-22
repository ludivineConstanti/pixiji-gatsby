import React, { useState, useEffect } from "react"

import SMenuIcon, { SIconContainer, SIconStroke } from "./style"
import { useAppSelector } from "src/store"
import {
  iVIconT,
  iVIconM,
  iVIconB,
  aVIconT,
  aVIconM,
  aVIconB,
} from "./animation"

interface MenuOrCloseIconProps {
  onClick: () => void
  showsCloseButton: boolean
}

const MenuOrCloseIcon = ({
  onClick,
  showsCloseButton,
}: MenuOrCloseIconProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  const colorMain = useAppSelector(state => state.global.color.main)

  const [vMenuIcon, setVMenuIcon] = useState({})
  const [vIcon, setVIcon] = useState({ t: iVIconT, m: iVIconM, b: iVIconB })

  useEffect(() => {
    setVIcon({
      t: {
        ...vIcon.t,
        animate: !showsCloseButton ? aVIconT.menuCloses : aVIconT.menuOpens,
      },
      m: {
        ...vIcon.m,
        animate: !showsCloseButton ? aVIconM.menuCloses : aVIconM.menuOpens,
      },
      b: {
        ...vIcon.b,
        animate: !showsCloseButton ? aVIconB.menuCloses : aVIconB.menuOpens,
      },
    })
  }, [showsCloseButton, colorMain])

  useEffect(() => {
    setVMenuIcon({
      ...vMenuIcon,
      animate: !showsCloseButton
        ? { backgroundColor: "#fff" }
        : { backgroundColor: colorMain },
    })
  }, [showsCloseButton])

  useEffect(() => {
    setVMenuIcon({
      ...vMenuIcon,
      animate: !showsCloseButton
        ? { backgroundColor: "#fff" }
        : { backgroundColor: colorMainL1 },
    })
  }, [colorMain])

  return (
    <SMenuIcon
      type="button"
      onClick={onClick}
      variants={vMenuIcon}
      initial="initial"
      animate="animate"
      onMouseEnter={() => {
        if (showsCloseButton) {
          setVMenuIcon({
            ...vMenuIcon,
            animate: { backgroundColor: colorMain },
          })
        }
      }}
      onMouseLeave={() => {
        if (showsCloseButton) {
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
          s={{ colorMain: showsCloseButton ? "#FFF" : colorMain }}
          key="SIconStrokeTop"
        />
        <SIconStroke
          variants={vIcon.m}
          s={{ colorMain }}
          key="SIconStrokeMiddle"
        />
        <SIconStroke
          variants={vIcon.b}
          s={{ colorMain: showsCloseButton ? "#FFF" : colorMain }}
          key="SIconStrokeBottom"
        />
      </SIconContainer>
    </SMenuIcon>
  )
}

export default MenuOrCloseIcon
