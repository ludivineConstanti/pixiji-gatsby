import React, { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"

import { useAppSelector } from "src/store"
import SPopUpButton, { SText, SOnOff, SDropdown } from "./style"
import { DropdownStateOptions } from "./models"

interface PopUpButtonProps {
  text?: false | string
  hasSwitch?: boolean
  dropdownState?: DropdownStateOptions
  onClick?: () => void
}

const PopUp = ({
  text = false,
  hasSwitch = false,
  dropdownState = false,
  onClick = () => {},
}: PopUpButtonProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  const colorMain = useAppSelector(state => state.global.color.main)
  const cheating = useAppSelector(state => state.global.cheating)

  const [vMenuSetting, setVMenuSetting] = useState({
    initial: { height: "0px" },
    animate: { height: "64px", backgroundColor: colorMain },
    whileHover: { backgroundColor: colorMain },
  })

  useEffect(() => {
    setVMenuSetting({
      ...vMenuSetting,
      animate: { ...vMenuSetting.animate, backgroundColor: colorMainL1 },
      whileHover: { backgroundColor: colorMain },
    })
  }, [colorMain])

  return (
    <AnimatePresence exitBeforeEnter>
      <SPopUpButton
        type="button"
        onClick={onClick}
        variants={vMenuSetting}
        initial="initial"
        animate="animate"
        exit="initial"
        whileHover="whileHover"
        s={{ dropdownState }}
      >
        {text && <SText>{text}</SText>}
        {hasSwitch && (
          <>
            <SOnOff s={{ active: !cheating, colorMain }}>off</SOnOff>
            <SOnOff s={{ active: cheating, colorMain }}>on</SOnOff>
          </>
        )}
        {dropdownState && <SDropdown s={{ dropdownState }} />}
      </SPopUpButton>
    </AnimatePresence>
  )
}

export default PopUp
