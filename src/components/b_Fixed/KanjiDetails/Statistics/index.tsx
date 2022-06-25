import React, { useState } from "react"
import styled from "styled-components"

import { useAppSelector } from "src/store"
import { sidePadding } from "../basics"
import { Subtitle, Text, Small } from "../style"
import MenuSetting from "src/components/b_Fixed/Menu/MenuSetting"

const Wrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${p => p.backgroundColor};
  color: white;
  width: 100%;
  position: relative;
`

const WrapperText = styled.div`
  padding: ${sidePadding}px;
`

const OtherOptions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, -100%);
`

const timeOptions = [
  "today",
  "this week",
  "this month",
  "this year",
  "all time",
]

const Statistics = () => {
  const [otherOptionsAreVisible, setOtherOptionsAreVisible] = useState(false)
  const [currentTimeOption, setCurrentTimeOption] = useState(timeOptions[0])
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  return (
    <>
      <Subtitle style={{ paddingLeft: `${sidePadding}px` }}>
        Statistics:
      </Subtitle>
      <Wrapper backgroundColor={colorMainL1}>
        {otherOptionsAreVisible && (
          <OtherOptions>
            {timeOptions
              .filter(e => e !== currentTimeOption)
              .map((e, i) => (
                <MenuSetting
                  text={`${e}:`}
                  key={`StatisticTimeOption${e}${i}`}
                  onClick={() => {
                    setCurrentTimeOption(e)
                    setOtherOptionsAreVisible(false)
                  }}
                />
              ))}
          </OtherOptions>
        )}
        <MenuSetting
          text={`${currentTimeOption}:`}
          onClick={() => {
            setOtherOptionsAreVisible(v => !v)
          }}
        />
        <WrapperText>
          <Text>
            <Small>Answered correctly:</Small> 2 times
          </Text>
          <Text>
            <Small>Answered wrong:</Small> 2 times
          </Text>
          <Text style={{ marginTop: "8px" }}>
            <Small>Success rate</Small>: 50%
          </Text>
        </WrapperText>
      </Wrapper>
    </>
  )
}

export default Statistics
