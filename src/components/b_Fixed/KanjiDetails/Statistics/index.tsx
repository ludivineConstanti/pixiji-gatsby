import React from "react"

import { useAppSelector } from "src/store"
import { sidePadding } from "../basics"
import { SSubtitle, SText } from "../style"
import { SWrapper, SWrapperText } from "./style"
import IsLoggedIn from "./IsLoggedIn"

const Statistics = () => {
  const userIsLoggedIn = useAppSelector(state => !!state.global.email)
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)

  return (
    <>
      <SSubtitle style={{ paddingLeft: `${sidePadding}px` }}>
        Statistics:
      </SSubtitle>
      <SWrapper backgroundColor={colorMainL1}>
        {!!userIsLoggedIn ? (
          <IsLoggedIn />
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
