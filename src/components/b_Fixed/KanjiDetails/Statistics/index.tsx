import React, { useState } from "react"

import { useAppSelector } from "src/store"
import { sidePadding } from "../basics"
import { SSubtitle, SText, SSmallText } from "../style"
import { SWrapper, SWrapperText, SOtherOptions } from "./style"
import PopUpButton from "src/components/e_Interactives/PopUpButton"

const timeOptions = [
  "today",
  "this week",
  "this month",
  "this year",
  "all time",
]

const Statistics = () => {
  const isLoggedIn = useAppSelector(state => !!state.global.email)
  const [otherOptionsAreVisible, setOtherOptionsAreVisible] = useState(false)
  const [currentTimeOption, setCurrentTimeOption] = useState(timeOptions[0])
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  return (
    <>
      <SSubtitle style={{ paddingLeft: `${sidePadding}px` }}>
        Statistics:
      </SSubtitle>
      <SWrapper backgroundColor={colorMainL1}>
        {isLoggedIn ? (
          <>
            {otherOptionsAreVisible && (
              <SOtherOptions>
                {timeOptions
                  .filter(e => e !== currentTimeOption)
                  .map((e, i) => (
                    <PopUpButton
                      text={e}
                      key={`StatisticTimeOption${e}${i}`}
                      onClick={() => {
                        setCurrentTimeOption(e)
                        setOtherOptionsAreVisible(false)
                      }}
                    />
                  ))}
              </SOtherOptions>
            )}
            <PopUpButton
              text={currentTimeOption}
              dropdownState={otherOptionsAreVisible ? "up" : "down"}
              onClick={() => {
                setOtherOptionsAreVisible(v => !v)
              }}
            />
            <SWrapperText>
              <SText>
                <SSmallText>Answered correctly:</SSmallText> 2 times
              </SText>
              <SText>
                <SSmallText>Answered wrong:</SSmallText> 2 times
              </SText>
              <SText style={{ marginTop: "8px" }}>
                <SSmallText>Success rate</SSmallText>: 50%
              </SText>
            </SWrapperText>
          </>
        ) : (
          <SWrapperText>
            <SText>You need to be logged in to see your statistics.</SText>
          </SWrapperText>
        )}
      </SWrapper>
    </>
  )
}

export default Statistics
