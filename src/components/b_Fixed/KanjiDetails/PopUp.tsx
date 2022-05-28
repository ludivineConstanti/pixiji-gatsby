import React from "react"
import styled from "styled-components"

import { sidePadding } from "./basics"
import { useAppSelector } from "src/store"

const Wrapper = styled.div`
  position: absolute;
  transform: translate(0, -100%);
  line-height: 20px;
  font-size: 15px;
  margin-right: ${sidePadding}px;
`

const BackgroundColor = styled.div`
  padding: ${sidePadding}px;
  background-color: white;
`

interface PopUpProps {
  text: string
}

const PopUp = ({ text }: PopUpProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  return (
    <Wrapper>
      <BackgroundColor style={{ border: `2px solid ${colorMainL1}` }}>
        {text}
      </BackgroundColor>
    </Wrapper>
  )
}

export default PopUp
