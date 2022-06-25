import React, { useEffect, useState } from "react"

import { useAppSelector } from "src/store"
import SMenuSetting, { SText, SOnOff, SDropdown } from "./style"

interface MenuSettingProps {
  text: string
  hasSwitch?: boolean
  onClick?: () => void
}

const MenuSetting = ({
  text,
  hasSwitch = false,
  onClick = () => {},
}: MenuSettingProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  const colorMain = useAppSelector(state => state.global.color.main)
  const cheating = useAppSelector(state => state.global.cheating)

  const [vMenuSetting, setVMenuSetting] = useState({
    initial: { height: "0px" },
    animate: { height: "64px" },
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
    <SMenuSetting
      type="button"
      onClick={onClick}
      variants={vMenuSetting}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
    >
      <SText>{text}</SText>
      {hasSwitch && (
        <>
          <SOnOff s={{ active: !cheating, colorMain }}>off</SOnOff>
          <SOnOff s={{ active: cheating, colorMain }}>on</SOnOff>
        </>
      )}
      <SDropdown />
    </SMenuSetting>
  )
}

export default MenuSetting
