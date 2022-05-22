import React from "react"

import STextWrapper, { SBackgroundColor } from "./style"
import { vBackgroundText } from "src/styles/animation"
import { useAppSelector } from "src/store"

interface TextWrapperProps {
  children: JSX.Element | JSX.Element[]
}

const TextWrapper = ({ children }: TextWrapperProps) => {
  const colorMain = useAppSelector(state => state.global.color.main)

  return (
    <STextWrapper initial="initial" animate="animate" exit="exit">
      {children}
      <SBackgroundColor s={{ colorMain }} variants={vBackgroundText} />
    </STextWrapper>
  )
}

export default TextWrapper
