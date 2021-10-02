import React, { RefObject } from "react"

import { SArrow, SStroke, SEnd } from "./SArrow"
import { useAppSelector } from "src/store"

interface ArrowProps {
  pointsToward?: "right" | "left"
  isWhite: boolean
  size: "small" | ""
}

const Arrow = React.forwardRef(
  (
    { pointsToward = "right", isWhite = false, size = "" }: ArrowProps,
    ref: RefObject<HTMLDivElement>
  ) => {
    const colorMain = useAppSelector(state => state.global.color.main)

    return (
      <SArrow s={{ pointsToward, size }} ref={ref}>
        <SStroke s={{ colorMain: isWhite ? "white" : colorMain }} />
        <SEnd
          s={{ colorMain: isWhite ? "white" : colorMain, pointsToward, size }}
        />
      </SArrow>
    )
  }
)

export default Arrow
