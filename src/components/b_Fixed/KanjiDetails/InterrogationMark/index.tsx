import React from "react"

import { SInterrogationMarkWrapper, SWrapper } from "./style"

interface InterrogationMarkProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  text: string
}

const InterrogationMark = ({ setIsVisible, text }: InterrogationMarkProps) => (
  <SWrapper
    onMouseEnter={() => setIsVisible(true)}
    onMouseLeave={() => setIsVisible(false)}
  >
    <SInterrogationMarkWrapper>?</SInterrogationMarkWrapper>
    {text}
  </SWrapper>
)

export default InterrogationMark
