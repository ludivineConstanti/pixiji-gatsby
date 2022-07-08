import React, { RefObject } from "react"

import { SArrow, SStroke, SEnd } from "./style"
import { useAppSelector } from "src/store"
import { PointsTowardOptions, SizeOptions } from "./models"

interface ArrowProps {
  pointsToward?: PointsTowardOptions
  isWhite?: boolean
  size?: SizeOptions
}

const Arrow = React.forwardRef(
  (
    { pointsToward = "right", isWhite = false, size = "" }: ArrowProps,
    ref: RefObject<HTMLDivElement>
  ) => {
    const colorMain = useAppSelector(state => state.global.color.main)

    return (
      <SArrow s={{ pointsToward, size }} ref={ref}>
        <SStroke
          s={{ pointsToward, colorMain: isWhite ? "white" : colorMain }}
        />
        <SEnd
          s={{ pointsToward, size, colorMain: isWhite ? "white" : colorMain }}
        />
      </SArrow>
    )
  }
)

export default Arrow
