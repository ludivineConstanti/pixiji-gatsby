import React from "react"
import styled from "styled-components"

import { useAppSelector } from "src/store"
import { sidePadding } from "../basics"
import { Subtitle, Text, Small } from "../style"

const Wrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${p => p.backgroundColor};
  color: white;
  width: 100%;
  padding: ${sidePadding}px;
`

const Statistics = () => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  return (
    <Wrapper backgroundColor={colorMainL1}>
      <Subtitle>Statistics:</Subtitle>
      <Text style={{ display: "block" }}>This month: </Text>
      <Text>
        <Small>Answered correctly:</Small> 2 times
      </Text>
      <Text>
        <Small>Answered wrong:</Small> 2 times
      </Text>
      <Text>
        50% <Small>Success rate</Small>
      </Text>
    </Wrapper>
  )
}

export default Statistics
