import React from "react"

import { useAppSelector } from "src/store"
import { SInterrogationMarkWrapper, SWrapper } from "./style"

interface InterrogationMarkProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  text: string
}

const InterrogationMark = ({ setIsVisible, text }: InterrogationMarkProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)

  return (
    <SWrapper
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <SInterrogationMarkWrapper style={{ backgroundColor: colorMainL1 }}>
        ?
      </SInterrogationMarkWrapper>
      {text}
    </SWrapper>
  )
}

export default InterrogationMark
