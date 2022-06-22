import React from "react"
import styled from "styled-components"

import { Subtitle } from "../style"

const InterrogationMarkWrapper = styled.div`
  height: 16px;
  width: 16px;
  background-color: black;
  color: white;
  text-align: center;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  letter-spacing: 0;
`

const Wrapper = styled(Subtitle)`
  cursor: pointer;
`

interface InterrogationMarkProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  text: string
}

const InterrogationMark = ({ setIsVisible, text }: InterrogationMarkProps) => (
  <Wrapper
    onMouseEnter={() => setIsVisible(true)}
    onMouseLeave={() => setIsVisible(false)}
  >
    <InterrogationMarkWrapper>?</InterrogationMarkWrapper>
    {text}
  </Wrapper>
)

export default InterrogationMark
